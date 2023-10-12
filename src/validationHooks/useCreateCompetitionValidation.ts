import { TypeOf } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createCompetitionSchema } from "./schemas/createCompetition.schema";

export type CreateCompetitionInput = TypeOf<typeof createCompetitionSchema>;

export function useCreateCompetitionValidation() {
  const {
    control,
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
    getValues,
  } = useForm<CreateCompetitionInput>({
    resolver: zodResolver(createCompetitionSchema),
  });

  return {
    control,
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
    getValues,
  };
}
