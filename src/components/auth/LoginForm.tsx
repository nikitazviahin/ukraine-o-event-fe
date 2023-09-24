import { Alert, Box, Collapse, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";

import {
  LoginInput,
  useLoginValidation,
} from "../../validationHooks/useLoginValidation";
import {
  getUserProfileRequest,
  postLoginRequest,
} from "../../services/authRequests";
import { ILoginBody } from "../../interfaces/auth.interface";
import { ERoutes } from "../../constants/routes.enum";
import {
  jwtToken,
  tokenExp,
  tokenIat,
  userEmail,
  userId,
  userRoles,
} from "../../constants/authLocalStorageData";
import { HttpStatusCode } from "axios";

const emailPlaceholderText = "Email";
const passwordPlaceholderText = "Password";

interface ILoginFormProps {
  isSignUp: boolean;
}

export const LoginForm = (loginProps: ILoginFormProps) => {
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const [errorAlertText, setErrorAlertText] = useState();

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useLoginValidation();

  const actionButtonText = loginProps.isSignUp ? "register user" : "log in";

  const onSubmitHandler: SubmitHandler<LoginInput> = async (
    values: ILoginBody
  ) => {
    try {
      const res = await postLoginRequest(values);

      const token = res.data.access_token;
      if (!token) throw new Error("Unable to get token");

      const getUserProfileResponse = await getUserProfileRequest(token);

      const isGetProfileSuccess =
        getUserProfileResponse &&
        getUserProfileResponse.status === HttpStatusCode.Ok;

      console.log(123);

      if (!isGetProfileSuccess) {
        throw new Error("Unable to get user's profile");
      }

      localStorage.setItem(jwtToken, token);
      localStorage.setItem(userId, getUserProfileResponse.data.id);
      localStorage.setItem(userEmail, getUserProfileResponse.data.email);
      localStorage.setItem(
        userRoles,
        JSON.stringify(getUserProfileResponse.data.roles)
      );
      localStorage.setItem(
        tokenIat,
        getUserProfileResponse.data.iat.toString()
      );
      localStorage.setItem(
        tokenExp,
        getUserProfileResponse.data.exp.toString()
      );

      setTimeout(() => {
        reset();
        window.location.replace(ERoutes.root);
      }, 500);
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
      <LoadingButton type="submit">{actionButtonText}</LoadingButton>

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
