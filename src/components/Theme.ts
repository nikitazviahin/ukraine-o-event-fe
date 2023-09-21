import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4CC9F0",
    },
  },
  typography: {
    button: {
      color: "#FFFFFF",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        margin: "dense",
      },
    },
  },
});
