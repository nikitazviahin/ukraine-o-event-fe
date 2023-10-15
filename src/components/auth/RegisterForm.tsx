import { useState } from "react";
import { t } from "i18next";
import { HttpStatusCode } from "axios";
import { Controller, SubmitHandler } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import {
  RegisterInput,
  useRegisterValidation,
} from "../../validationHooks/useRegisterValidation";
import { AuthServiceInstance } from "../../api/auth.api";
import { CustomAlert } from "../alerts/CustomAlert";
import { parseISOString } from "../../helpers/parseISOString";
import { IRegisterFormProps } from "./types/registerFormProps.interface";
import {
  registerFormBoxStyle,
  registerFormFirstNameStyle,
  registerFormLastNameStyle,
} from "../../styles/registerForm.style";

export const RegisterForm = (registerProps: IRegisterFormProps) => {
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const [errorAlertText, setErrorAlertText] = useState();

  const {
    control,
    register,
    formState: { errors },
    reset,
    handleSubmit,
    getValues,
  } = useRegisterValidation();

  const onSubmitHandler: SubmitHandler<RegisterInput> = async (values) => {
    setErrorAlertOpen(false);
    setSuccessAlertOpen(false);

    try {
      const dateOfBirthValueISO = parseISOString(values.dateOfBirth);

      const res = await AuthServiceInstance.postSignUpRequest({
        ...values,
        dateOfBirth: dateOfBirthValueISO,
      });

      if (res.status === HttpStatusCode.Created) {
        setSuccessAlertOpen(true);
      }

      reset();

      setTimeout(() => {
        registerProps.setIsSignUp(false);
      }, 2000);
    } catch (error: any) {
      setErrorAlertOpen(() => true);
      setErrorAlertText(() => error.message);
    }
  };

  return (
    <Box
      component={"form"}
      display={"flex"}
      flexDirection={"column"}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <TextField
        type={"email"}
        autoComplete={"on"}
        label={t(`auth.email`)}
        error={!!errors["email"]}
        helperText={errors["email"] ? errors["email"].message : ""}
        {...register("email")}
      />

      <TextField
        type={"password"}
        label={t(`auth.password`)}
        error={!!errors["password"]}
        helperText={errors["password"] ? errors["password"].message : ""}
        {...register("password")}
      />

      <TextField
        type={"password"}
        label={t(`auth.confirmPassword`)}
        error={!!errors["passwordConfirm"]}
        helperText={
          errors["passwordConfirm"] ? errors["passwordConfirm"].message : ""
        }
        {...register("passwordConfirm")}
      />

      <Box sx={registerFormBoxStyle}>
        <TextField
          type={"text"}
          sx={registerFormFirstNameStyle}
          label={t(`auth.firstName`)}
          error={!!errors["firstName"]}
          helperText={errors["firstName"] ? errors["firstName"].message : ""}
          {...register("firstName")}
        />

        <TextField
          type={"text"}
          sx={registerFormLastNameStyle}
          label={t(`auth.lastName`)}
          error={!!errors["lastName"]}
          helperText={errors["lastName"] ? errors["lastName"].message : ""}
          {...register("lastName")}
        />
      </Box>

      <Controller
        control={control}
        name={"dateOfBirth"}
        render={({ field }) => {
          return (
            <DatePicker
              format={"DD.MM.YYYY"}
              label={t(`auth.dateOfBirth`)}
              onChange={field.onChange}
              disableFuture
              slotProps={{
                field: {
                  readOnly: true,
                },
                textField: {
                  error: !!errors["dateOfBirth"],
                  helperText: errors["dateOfBirth"]
                    ? t(`global.invalidDate`)
                    : "",
                  value: getValues().dateOfBirth,
                },
              }}
            />
          );
        }}
      />

      <TextField
        type={"text"}
        error={!!errors["orienteeringClub"]}
        helperText={
          errors["orienteeringClub"] ? errors["orienteeringClub"].message : ""
        }
        label={t(`auth.club`)}
        {...register("orienteeringClub")}
      />

      <LoadingButton variant={"contained"} type={"submit"}>
        <Typography variant={"button"}>
          {registerProps.actionButtonText}
        </Typography>
      </LoadingButton>

      <CustomAlert
        inProp={successAlertOpen}
        severityProp={"success"}
        onClickProp={() => setSuccessAlertOpen(false)}
        alertTextProp={t(`auth.userRegisteredSuccessfully`)}
      />

      <CustomAlert
        inProp={errorAlertOpen}
        severityProp={"error"}
        onClickProp={() => setErrorAlertOpen(false)}
        alertTextProp={errorAlertText}
      />
    </Box>
  );
};
