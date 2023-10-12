import { useForm } from "react-hook-form";
import { TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "./schemas/register.schema";

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
