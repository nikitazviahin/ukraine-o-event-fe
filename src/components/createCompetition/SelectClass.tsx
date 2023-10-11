import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { EClass } from "../../types/enums/class.enum";

export interface SelectClassProps {
  selectedClasses: EClass[];
  setSelectedClasses: React.Dispatch<React.SetStateAction<EClass[]>>;
}

const selectClassLabelText = "Select Classes";
const classes = Object.values(EClass);

export const SelectClass = (selectClassProps: SelectClassProps) => {
  return (
    <FormControl sx={{ margin: "0.5rem" }}>
      <InputLabel>{selectClassLabelText}</InputLabel>
      <Select
        aria-label="selectClass"
        id={"selectClass"}
        label={selectClassLabelText}
        sx={{ width: "20rem" }}
        multiple
        value={selectClassProps.selectedClasses}
        onChange={(e: any) =>
          selectClassProps.setSelectedClasses(e.target.value)
        }
        input={<OutlinedInput label={selectClassLabelText} />}
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
