import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterInput,
  registerSchema,
} from "../../validationSchemas/registerSchema";
import dayjs, { Dayjs } from "dayjs";

interface IRegisterFormProps {
  isSignUp: boolean;
}

const emailPlaceholderText = "Email";
const passwordPlaceholderText = "Password";
const confirmPasswordPlaceholderText = "Confirm password";
const firstNamePlaceholderText = "First name";
const lastNamePlaceholderText = "Email";
const dateOfBirthPlaceholderText = "Date of birth";
const orienteeringClubPlaceholderText = "Orienteering Club";

export const RegisterForm = (registerProps: IRegisterFormProps) => {
  const [dateOfBirthValue, setDateOfBirthValue] = useState<Dayjs | null>(
    dayjs("2022-04-17")
  );

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const actionButtonText = registerProps.isSignUp ? "register user" : "log in";

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

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    const dateOfBirthValueISO = dayjs(dateOfBirthValue).toISOString();
    console.log({ ...values, dateOfBirthValueISO });
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
        placeholder={emailPlaceholderText}
        error={!!errors["email"]}
        helperText={errors["email"] ? errors["email"].message : ""}
        {...register("email")}
      />
      <TextField
        type="password"
        placeholder={passwordPlaceholderText}
        error={!!errors["password"]}
        helperText={errors["password"] ? errors["password"].message : ""}
        {...register("password")}
      />
      <TextField
        type="password"
        placeholder={confirmPasswordPlaceholderText}
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
          sx={{ paddingRight: "0.2rem" }}
          placeholder={firstNamePlaceholderText}
          error={!!errors["firstName"]}
          helperText={errors["firstName"] ? errors["firstName"].message : ""}
          {...register("firstName")}
        />
        <TextField
          sx={{ paddingLeft: "0.2rem" }}
          placeholder={lastNamePlaceholderText}
          error={!!errors["lastName"]}
          helperText={errors["lastName"] ? errors["lastName"].message : ""}
          {...register("lastName")}
        />
      </Box>
      <DatePicker
        label="Controlled picker"
        slotProps={{
          textField: { placeholder: dateOfBirthPlaceholderText },
        }}
        sx={{ width: "16rem" }}
        value={dateOfBirthValue}
        onChange={(newValue) => setDateOfBirthValue(newValue)}
      />
      <TextField
        placeholder={orienteeringClubPlaceholderText}
        {...register("orienteeringClub")}
      />
      <LoadingButton type="submit">{actionButtonText}</LoadingButton>
    </Box>
  );
};
