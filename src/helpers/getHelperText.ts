export const getHelperText = (errors: any, propertyName: any) => {
  return errors[`${propertyName}`] ? errors[`${propertyName}`] : "";
};
