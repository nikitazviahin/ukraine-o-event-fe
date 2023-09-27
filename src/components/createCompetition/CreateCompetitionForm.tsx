import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { SelectClass } from "./SelectClass";

const competitonNameLabelText = "Name of the competition";
const competitionDescriptionLabelText = "Description of the competition";
const dateOfCompetitionLabelText = "Date of competition";
const competitionPlaceText = "Place of the competition";

export const CreateCompetitionForm = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      maxWidth={"30rem"}
      alignItems={"center"}
      margin="auto"
      marginTop={"1rem"}
      padding={"1rem"}
      borderRadius={3}
      boxShadow={"2px 2px 5px #ccc"}
      component={"form"}
    >
      <TextField
        type="text"
        label={competitonNameLabelText}
        sx={{ width: "20rem" }}
      />
      <TextField
        type="text"
        label={competitionDescriptionLabelText}
        sx={{ width: "20rem" }}
        multiline
        rows={5}
      />
      <DatePicker
        format="DD.MM.YYYY"
        label={dateOfCompetitionLabelText}
        sx={{ width: "20rem" }}
        slotProps={{
          field: {
            readOnly: true,
          },
        }}
      />
      <TextField
        type="text"
        label={competitionPlaceText}
        sx={{ width: "20rem" }}
      />
      <SelectClass />
    </Box>
  );
};
