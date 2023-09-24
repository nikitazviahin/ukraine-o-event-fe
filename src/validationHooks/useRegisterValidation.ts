import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeOf, object, string } from "zod";
import { RegisterValidationErrorMessages } from "./constants/validationErrorMessages";

const registerSchema = object({
  email: string()
    .nonempty(RegisterValidationErrorMessages.emailIsRequired)
    .email(RegisterValidationErrorMessages.emailIsRequired),
  password: string()
    .nonempty(RegisterValidationErrorMessages.passwordIsRequired)
    .min(6, RegisterValidationErrorMessages.passwordLess)
    .max(32, RegisterValidationErrorMessages.passwordMore),
  passwordConfirm: string().nonempty(
    RegisterValidationErrorMessages.passwordIsRequired
  ),
  firstName: string()
    .nonempty(RegisterValidationErrorMessages.firstNameRequired)
    .max(50, RegisterValidationErrorMessages.firstNameLess),
  lastName: string()
    .nonempty(RegisterValidationErrorMessages.lastNameRequired)
    .max(50, RegisterValidationErrorMessages.lastNameLess),
  orienteeringClub: string().max(
    100,
    RegisterValidationErrorMessages.orienteeringClubLess
  ),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: RegisterValidationErrorMessages.passwordDoNotMatch,
});

export type RegisterInput = TypeOf<typeof registerSchema>;

export function useRegisterValidation() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  return {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  };
}
