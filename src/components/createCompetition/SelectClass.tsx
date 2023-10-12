import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

import { EClass } from "../../types/enums/class.enum";
import { SelectClassProps } from "./types/selectClassProps.interface";
import { t } from "i18next";

const classes = Object.values(EClass);

export const SelectClass = (selectClassProps: SelectClassProps) => {
  return (
    <FormControl sx={{ margin: "0.5rem" }}>
      <InputLabel>{t(`competition.selectClass`)}</InputLabel>
      <Select
        aria-label={"selectClass"}
        id={"selectClass"}
        label={t(`competition.selectClass`)}
        sx={{ width: "20rem" }}
        multiple
        value={selectClassProps.selectedClasses}
        onChange={(e: any) =>
          selectClassProps.setSelectedClasses(e.target.value)
        }
        input={<OutlinedInput label={t(`competition.selectClass`)} />}
      >
        {classes.map((cl) => (
          <MenuItem key={cl} value={cl}>
            {cl}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
