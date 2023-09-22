import { useForm } from "react-hook-form";
import { RegisterInput, registerSchema } from "../registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";

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
