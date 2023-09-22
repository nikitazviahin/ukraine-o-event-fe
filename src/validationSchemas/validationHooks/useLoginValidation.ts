import { useForm } from "react-hook-form";
import { LoginInput, loginSchema } from "../loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

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
