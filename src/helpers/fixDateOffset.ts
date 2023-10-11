export const fixDateOffset = (date: Date): Date => {
  return new Date(date.getTime() + Math.abs(date.getTimezoneOffset() * 60000));
};
