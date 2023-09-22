import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import {
  RegisterInput,
  useRegisterValidation,
} from "../../validationSchemas/validationHooks/useRegisterValidation";

interface IRegisterFormProps {
  isSignUp: boolean;
}

const emailLabelText = "Email";
const passwordLabelText = "Password";
const confirmPasswordLabelText = "Confirm password";
const firstNameLabelText = "First name";
const lastNameLabelText = "Last name";
const dateOfBirthLabelText = "Date of birth";
const orienteeringClubLabelText = "Orienteering Club";
const defaultDateOfBirth = "01/01/1970";

export const RegisterForm = (registerProps: IRegisterFormProps) => {
  const [loading, setLoading] = useState(false);
  const [dateOfBirthValue, setDateOfBirthValue] = useState<Dayjs | Date | null>(
    dayjs(defaultDateOfBirth)
  );

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useRegisterValidation();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    const dateOfBirthValueISO = dayjs(dateOfBirthValue).toISOString();
    console.log({ ...values, dateOfBirthValueISO });
  };

  const actionButtonText = registerProps.isSignUp ? "register user" : "log in";

  return (
    <Box
      component={"form"}
      display={"flex"}
      flexDirection={"column"}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <TextField
        type="email"
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
          sx={{ paddingRight: "0.2rem" }}
          label={firstNameLabelText}
          error={!!errors["firstName"]}
          helperText={errors["firstName"] ? errors["firstName"].message : ""}
          {...register("firstName")}
        />
        <TextField
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
        sx={{ width: "16rem" }}
        value={dateOfBirthValue}
        disableFuture
        onChange={(newValue) => setDateOfBirthValue(newValue)}
        slotProps={{
          field: {
            readOnly: true,
          },
        }}
      />
      <TextField
        label={orienteeringClubLabelText}
        {...register("orienteeringClub")}
      />
      <LoadingButton type="submit" loading={loading}>
        {actionButtonText}
      </LoadingButton>
    </Box>
  );
};
