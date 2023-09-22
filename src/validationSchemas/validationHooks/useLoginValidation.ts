import { useForm } from "react-hook-form";
import { TypeOf, object, string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = object({
  email: string().nonempty("Email is required").email("Email is invalid"),
  password: string()
    .nonempty("Password is required")
    .min(6, "Password must be more than 6 characters")
    .max(32, "Password must be less than 32 characters"),
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
