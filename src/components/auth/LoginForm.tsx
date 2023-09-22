import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import {
  LoginInput,
  useLoginValidation,
} from "../../validationSchemas/validationHooks/useLoginValidation";

const emailPlaceholderText = "Email";
const passwordPlaceholderText = "Password";

interface ILoginFormProps {
  isSignUp: boolean;
}

export const LoginForm = (loginProps: ILoginFormProps) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useLoginValidation();

  const actionButtonText = loginProps.isSignUp ? "register user" : "log in";

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    console.log(values);
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
      <LoadingButton type="submit" loading={loading}>
        {actionButtonText}
      </LoadingButton>
    </Box>
  );
};
