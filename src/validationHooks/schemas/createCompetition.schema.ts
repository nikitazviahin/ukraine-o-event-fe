import { t } from "i18next";
import { object, string, z } from "zod";

import { fixDateOffset } from "../../helpers/fixDateOffset";

const errorsCreateCompetition = `errors.createCompetition`;

export const createCompetitionSchema = object({
  name: string()
    .nonempty(t(`${errorsCreateCompetition}.nameIsRequired`))
    .max(100, t(`${errorsCreateCompetition}.nameMore`)),
  description: string()
    .nonempty(t(`${errorsCreateCompetition}.descriptionIsRequired`))
    .max(5000, t(`${errorsCreateCompetition}.descriptionMore`)),
  competitionDate: z.coerce.date().transform(fixDateOffset),
  place: string()
    .nonempty(t(`${errorsCreateCompetition}.placeIsRequired`))
    .max(100, t(`${errorsCreateCompetition}.placeMore`)),
});
