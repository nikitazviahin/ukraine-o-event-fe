import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { LoadingButton } from "@mui/lab";

import {
  LoginInput,
  useLoginValidation,
} from "../../validationHooks/useLoginValidation";
import { ILoginBody } from "../../interfaces/authService.interface";
import { ERoutes } from "../../constants/routes.enum";
import { ILoginFormProps } from "./interfaces/ILoginFormProps";
import { handleSubmitLogin } from "./authHelpers/handleSugmitLogin";
import { CustomAlert } from "../CustomAlert";

const emailPlaceholderText = "Email";
const passwordPlaceholderText = "Password";

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
        autoComplete="on"
        size="small"
        placeholder={emailPlaceholderText}
        type="email"
        error={!!errors["email"]}
        helperText={errors["email"] ? errors["email"].message : ""}
        {...register("email")}
      />

      <TextField
        size="small"
        type="password"
        placeholder={passwordPlaceholderText}
        error={!!errors["password"]}
        helperText={errors["password"] ? errors["password"].message : ""}
        {...register("password")}
      />

      <LoadingButton type="submit">{loginProps.actionButtonText}</LoadingButton>
      <CustomAlert
        inProp={errorAlertOpen}
        severityProp={"error"}
        onClickProp={() => setErrorAlertOpen(false)}
        alertTextProp={errorAlertText}
      />
    </Box>
  );
};
