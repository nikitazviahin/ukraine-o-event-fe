import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const RegisterForm = () => {
  return (
    <>
      <TextField type="email" placeholder="Email" />
      <TextField type="password" placeholder="Password" />
      <TextField type="password" placeholder="Confirm password" />
      <Box
        sx={{
          display: "flex",
          width: "16rem",
        }}
      >
        <TextField sx={{ paddingRight: "0.2rem" }} placeholder="First name" />
        <TextField sx={{ paddingLeft: "0.2rem" }} placeholder="Last name" />
      </Box>
      <DatePicker
        slotProps={{ textField: { placeholder: "Date of birth" } }}
        sx={{ width: "16rem" }}
      />
      <TextField placeholder="Orienteering Club" />
    </>
  );
};
