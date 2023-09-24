import { useState } from "react";
import { HttpStatusCode } from "axios";
import { SubmitHandler } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, Box, Collapse, IconButton, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

import {
  RegisterInput,
  useRegisterValidation,
} from "../../validationHooks/useRegisterValidation";
import { IRegisterFormProps } from "./interfaces/IRegisterFormProps";
import { AuthServiceInstance } from "../../services/authService";

const emailLabelText = "Email";
const passwordLabelText = "Password";
const confirmPasswordLabelText = "Confirm password";
const firstNameLabelText = "First name";
const lastNameLabelText = "Last name";
const dateOfBirthLabelText = "Date of birth";
const orienteeringClubLabelText = "Orienteering Club";
const defaultDateOfBirth = "01/01/1970";
const userRegisteredSuccessfullyText = "User registered successfully";

export const RegisterForm = (registerProps: IRegisterFormProps) => {
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const [errorAlertText, setErrorAlertText] = useState();
  const [dateOfBirthValue, setDateOfBirthValue] = useState<Dayjs | Date | null>(
    dayjs(defaultDateOfBirth)
  );

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
      const dateOfBirthValueISO = dayjs(dateOfBirthValue).toISOString();
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
      <LoadingButton type="submit">
        {registerProps.actionButtonText}
      </LoadingButton>
      <Collapse in={successAlertOpen}>
        <Alert
          severity="success"
          action={
            <IconButton onClick={() => setSuccessAlertOpen(false)}>
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
          {userRegisteredSuccessfullyText}
        </Alert>
      </Collapse>
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
