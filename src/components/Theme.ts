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
      "@media (max-width:350px)": {
        fontSize: "0.7rem",
      },
      "@media (max-width:300px)": {
        fontSize: "0.65rem",
      },
      "@media (max-width:250px)": {
        fontSize: "0.6rem",
      },
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        position: "static",
      },
    },
  },
});
