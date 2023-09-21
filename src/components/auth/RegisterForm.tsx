import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const RegisterForm = () => {
  return (
    <>
      <TextField
        sx={{ width: "16rem" }}
        type="email"
        size="small"
        placeholder="Email"
      />
      <TextField
        sx={{ width: "16rem" }}
        size="small"
        type="password"
        placeholder="Password"
      />
      <TextField
        sx={{ width: "16rem" }}
        size="small"
        type="password"
        placeholder="Confirm password"
      />
      <Box
        sx={{
          display: "flex",
          width: "16rem",
        }}
      >
        <TextField
          sx={{ paddingRight: "1rem" }}
          size="small"
          placeholder="First name"
        />
        <TextField size="small" placeholder="Last name" />
      </Box>
      <DatePicker
        slotProps={{ textField: { placeholder: "Date of birth" } }}
        sx={{ width: "16rem" }}
      />
      <TextField
        sx={{ width: "16rem" }}
        size="small"
        placeholder="Orienteering Club"
      />
    </>
  );
};
