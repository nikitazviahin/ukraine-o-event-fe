import { object, string } from "zod";
import { t } from "i18next";

const errorsLogin = `errors.login`;

export const loginSchema = object({
  email: string()
    .nonempty(t(`${errorsLogin}.emailIsRequired`))
    .email(t(`${errorsLogin}.emailIsInvalid`)),
  password: string()
    .nonempty(t(`${errorsLogin}.passwordIsRequired`))
    .min(6, t(`${errorsLogin}.passwordMore`))
    .max(32, t(`${errorsLogin}.passwordLess`)),
});
