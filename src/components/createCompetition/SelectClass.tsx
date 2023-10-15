import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { t } from "i18next";

import { EClass } from "../../types/enums/class.enum";
import { SelectClassProps } from "./types/selectClassProps.interface";
import {
  selectClassFormControlStyle,
  selectClassSelectorStyle,
} from "../../styles/selectClass.style";

const classes = Object.values(EClass);

export const SelectClass = (selectClassProps: SelectClassProps) => {
  return (
    <FormControl sx={selectClassFormControlStyle}>
      <InputLabel>{t(`competition.selectClass`)}</InputLabel>
      <Select
        aria-label={"selectClass"}
        id={"selectClass"}
        label={t(`competition.selectClass`)}
        sx={selectClassSelectorStyle}
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
