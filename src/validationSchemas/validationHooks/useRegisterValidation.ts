import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeOf, object, string } from "zod";

const registerSchema = object({
  email: string().nonempty("Email is required").email("Email is invalid"),
  password: string()
    .nonempty("Password is required")
    .min(6, "Password must be more than 6 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().nonempty("Please confirm your password"),
  firstName: string()
    .nonempty("First name is required")
    .max(50, "First name must be less than 50 characters"),
  lastName: string()
    .nonempty("Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  orienteeringClub: string().max(
    100,
    "Orienteering club name must be less than 100 characters"
  ),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
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
