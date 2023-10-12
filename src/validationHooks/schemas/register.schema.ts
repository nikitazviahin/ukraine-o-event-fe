import { object, string, z } from "zod";
import { t } from "i18next";

import { fixDateOffset } from "../../helpers/fixDateOffset";

const errorRegister = `errors.register`;

export const registerSchema = object({
  email: string()
    .nonempty(t(`${errorRegister}.emailIsRequired`))
    .email(t(`${errorRegister}.emailIsInvalid`)),
  password: string()
    .nonempty(t(`${errorRegister}.passwordIsRequired`))
    .min(6, t(`${errorRegister}.passwordMore`))
    .max(32, t(`${errorRegister}.passwordLess`)),
  passwordConfirm: string().nonempty(t(`${errorRegister}.passwordConfirm`)),
  firstName: string()
    .nonempty(t(`${errorRegister}.firstNameRequired`))
    .max(50, t(`${errorRegister}.firstNameLess`)),
  lastName: string()
    .nonempty(t(`${errorRegister}.lastNameRequired`))
    .max(50, t(`${errorRegister}.lastNameLess`)),
  dateOfBirth: z.coerce.date().transform(fixDateOffset),
  orienteeringClub: string().max(
    100,
    t(`${errorRegister}.orienteeringClubLess`)
  ),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: t(`${errorRegister}.passwordDoNotMatch`),
});
