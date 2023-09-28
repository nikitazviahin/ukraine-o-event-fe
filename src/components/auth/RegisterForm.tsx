import { useState } from "react";
import { HttpStatusCode } from "axios";
import { SubmitHandler } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import {
  RegisterInput,
  useRegisterValidation,
} from "../../validationHooks/useRegisterValidation";
import { AuthServiceInstance } from "../../api/auth.api";
import { CustomAlert } from "../CustomAlert";
import { parseISOString } from "../../helpers/parseISOString";
import { TDate } from "../../types/date.type";

export interface IRegisterFormProps {
  actionButtonText: string;
}

const emailLabelText = "Email";
const passwordLabelText = "Password";
const confirmPasswordLabelText = "Confirm password";
const firstNameLabelText = "First name";
const lastNameLabelText = "Last name";
const dateOfBirthLabelText = "Date of birth";
const orienteeringClubLabelText = "Orienteering Club";
const userRegisteredSuccessfullyText = "User registered successfully";

export const RegisterForm = (registerProps: IRegisterFormProps) => {
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const [errorAlertText, setErrorAlertText] = useState();
  const [dateOfBirthValue, setDateOfBirthValue] = useState<TDate>(null);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useRegisterValidation();

  const onSubmitHandler: SubmitHandler<RegisterInput> = async (values) => {
    setErrorAlertOpen(false);
    setSuccessAlertOpen(false);

    try {
      const dateOfBirthValueISO = parseISOString(dateOfBirthValue);

      const res = await AuthServiceInstance.postSignUpRequest({
        ...values,
        dateOfBirth: dateOfBirthValueISO,
      });

      if (res.status === HttpStatusCode.Created) {
        setSuccessAlertOpen(true);
      }

      setDateOfBirthValue(null);
      reset();
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
        type="email"
        autoComplete="on"
        label={emailLabelText}
        error={!!errors["email"]}
        helperText={errors["email"] ? errors["email"].message : ""}
        {...register("email")}
      />

      <TextField
        type="password"
        label={passwordLabelText}
        error={!!errors["password"]}
        helperText={errors["password"] ? errors["password"].message : ""}
        {...register("password")}
      />

      <TextField
        type="password"
        label={confirmPasswordLabelText}
        error={!!errors["passwordConfirm"]}
        helperText={
          errors["passwordConfirm"] ? errors["passwordConfirm"].message : ""
        }
        {...register("passwordConfirm")}
      />

      <Box
        sx={{
          display: "flex",
          width: "16rem",
        }}
      >
        <TextField
          type="text"
          sx={{ paddingRight: "0.2rem" }}
          label={firstNameLabelText}
          error={!!errors["firstName"]}
          helperText={errors["firstName"] ? errors["firstName"].message : ""}
          {...register("firstName")}
        />

        <TextField
          type="text"
          sx={{ paddingLeft: "0.2rem" }}
          label={lastNameLabelText}
          error={!!errors["lastName"]}
          helperText={errors["lastName"] ? errors["lastName"].message : ""}
          {...register("lastName")}
        />
      </Box>

      <DatePicker
        format="DD.MM.YYYY"
        label={dateOfBirthLabelText}
        disableFuture
        slotProps={{
          field: {
            readOnly: true,
          },
        }}
        value={dateOfBirthValue}
        onChange={setDateOfBirthValue}
      />

      <TextField
        type="text"
        error={!!errors["orienteeringClub"]}
        helperText={
          errors["orienteeringClub"] ? errors["orienteeringClub"].message : ""
        }
        label={orienteeringClubLabelText}
        {...register("orienteeringClub")}
      />

      <LoadingButton type="submit">
        {registerProps.actionButtonText}
      </LoadingButton>

      <CustomAlert
        inProp={successAlertOpen}
        severityProp={"success"}
        onClickProp={() => setSuccessAlertOpen(false)}
        alertTextProp={userRegisteredSuccessfullyText}
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
