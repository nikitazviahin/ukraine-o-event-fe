import { t } from "i18next";
import dayjs from "dayjs";

import { TDate } from "../types/date.type";

export function parseISOString(date: TDate): string {
  try {
    const parsedDate = dayjs(date).toISOString();
    return parsedDate;
  } catch (error) {
    throw new Error(t(`errors.global.invalidDate`));
  }
}
