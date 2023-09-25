import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { ICustomAlertProps } from "./interfaces/cusomAlert.interface";

export const CustomAlert = (customAlertProps: ICustomAlertProps) => {
  return (
    <Collapse in={customAlertProps.inProp}>
      <Alert
        severity={customAlertProps.severityProp}
        action={
          <IconButton onClick={customAlertProps.onClickProp}>
            <CloseIcon />
          </IconButton>
        }
      >
        {customAlertProps.alertTextProp}
      </Alert>
    </Collapse>
  );
};
