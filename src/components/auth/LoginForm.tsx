import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { LoginInput, loginSchema } from "../../validationSchemas/loginSchema";

const emailPlaceholderText = "Email";
const passwordPlaceholderText = "Password";

interface ILoginFormProps {
  isSignUp: boolean;
}

export const LoginForm = (loginProps: ILoginFormProps) => {
  const [loading, setLoading] = useState(false);

  const actionButtonText = loginProps.isSignUp ? "register user" : "log in";

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
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
