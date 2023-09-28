import { AlertColor } from "@mui/material";

export interface ICustomAlertProps {
  onClickProp: React.MouseEventHandler<HTMLButtonElement>;
  alertTextProp: string | undefined;
  severityProp: AlertColor | undefined;
  inProp: boolean;
}
