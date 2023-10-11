import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeOf, object, string, z } from "zod";
import { RegisterValidationErrorMessages } from "./constants/validationErrorMessages";
import { fixDateOffset } from "../helpers/fixDateOffset";

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
  dateOfBirth: z.coerce.date().transform(fixDateOffset),
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
  const { control, register, formState, reset, handleSubmit, getValues } =
    useForm<RegisterInput>({
      resolver: zodResolver(registerSchema),
    });

  return {
    control,
    register,
    formState,
    reset,
    handleSubmit,
    getValues,
  };
}
