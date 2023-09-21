import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fb8500",
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
        size: "small",
        sx: {
          width: "16rem",
        },
      },
    },
  },
});
