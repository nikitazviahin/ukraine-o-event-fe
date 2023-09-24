import { useForm } from "react-hook-form";
import { TypeOf, object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginValidationErrorMessages } from "./constants/validationErrorMessages";

const loginSchema = object({
  email: string()
    .nonempty(LoginValidationErrorMessages.emailIsRequired)
    .email(LoginValidationErrorMessages.emailIsInvalid),
  password: string()
    .nonempty(LoginValidationErrorMessages.passwordIsRequired)
    .min(6, LoginValidationErrorMessages.passwordLess)
    .max(32, LoginValidationErrorMessages.passwordMore),
});

export type LoginInput = TypeOf<typeof loginSchema>;

export function useLoginValidation() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  return {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  };
}
