import { TypeOf, object, string, z } from "zod";
import { CreateCompetitionErrorMessages } from "./constants/validationErrorMessages";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const createCompetitionSchema = object({
  name: string()
    .nonempty(CreateCompetitionErrorMessages.nameIsRequired)
    .max(100, CreateCompetitionErrorMessages.nameMore),
  description: string()
    .nonempty(CreateCompetitionErrorMessages.descriptionIsRequired)
    .max(5000, CreateCompetitionErrorMessages.descriptionMore),
  competitionDate: z.coerce.date(),
  place: string()
    .nonempty(CreateCompetitionErrorMessages.placeIsRequired)
    .max(100, CreateCompetitionErrorMessages.plaseMore),
});

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
