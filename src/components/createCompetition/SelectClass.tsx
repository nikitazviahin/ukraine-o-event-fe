import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";
import { EClass } from "../home/interfaces/class.enum";

const selectClassLabelText = "Select Classes";
const classes = Object.values(EClass);

export const SelectClass = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  return (
    <FormControl sx={{ margin: "0.5rem" }}>
      <InputLabel>{selectClassLabelText}</InputLabel>
      <Select
        sx={{ width: "20rem" }}
        multiple
        value={selectedClasses}
        onChange={(e: any) => setSelectedClasses(e.target.value)}
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
