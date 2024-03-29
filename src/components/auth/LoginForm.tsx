import { t } from "i18next";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { LoadingButton } from "@mui/lab";

import {
  LoginInput,
  useLoginValidation,
} from "../../validationHooks/useLoginValidation";
import { ILoginBody } from "../../types/auth.types";
import { ERoutes } from "../../types/enums/route.enum";
import { handleSubmitLogin } from "./helpers/handleSubmitLogin";
import { CustomAlert } from "../alerts/CustomAlert";
import { ILoginFormProps } from "./types/loginFormProps.interface";

export const LoginForm = (loginProps: ILoginFormProps) => {
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const [errorAlertText, setErrorAlertText] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useLoginValidation();

  const onSubmitHandler: SubmitHandler<LoginInput> = async (
    values: ILoginBody
  ) => {
    try {
      await handleSubmitLogin(values);

      window.location.replace(ERoutes.root);
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
        autoComplete={"on"}
        size={"small"}
        placeholder={t(`auth.email`)}
        type={"email"}
        error={!!errors["email"]}
        helperText={errors["email"] ? errors["email"].message : ""}
        {...register("email")}
      />

      <TextField
        size={"small"}
        type={"password"}
        placeholder={t(`auth.password`)}
        error={!!errors["password"]}
        helperText={errors["password"] ? errors["password"].message : ""}
        {...register("password")}
      />

      <LoadingButton variant={"contained"} type={"submit"}>
        <Typography variant={"button"}>
          {loginProps.actionButtonText}
        </Typography>
      </LoadingButton>
      <CustomAlert
        inProp={errorAlertOpen}
        severityProp={"error"}
        onClickProp={() => setErrorAlertOpen(false)}
        alertTextProp={errorAlertText}
      />
    </Box>
  );
};
