import { Alert, Box, Collapse, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";

import {
  LoginInput,
  useLoginValidation,
} from "../../validationHooks/useLoginValidation";
import { ILoginBody } from "../../interfaces/auth.interface";
import { ERoutes } from "../../constants/routes.enum";
import { ILoginFormProps } from "./interfaces/ILoginFormProps";
import { handleSubmitLogin } from "./authHelpers/handleSugmitLogin";

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
        size="small"
        placeholder={emailPlaceholderText}
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

      <Collapse in={errorAlertOpen}>
        <Alert
          severity="error"
          action={
            <IconButton onClick={() => setErrorAlertOpen(false)}>
              <CloseIcon />
            </IconButton>
          }
          sx={{
            position: "absolute",
            top: "15%",
            left: "65%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {errorAlertText}
        </Alert>
      </Collapse>
    </Box>
  );
};
