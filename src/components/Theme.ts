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
    MuiAlert: {
      defaultProps: {
        sx: {
          position: "absolute",
          top: "75%",
          left: "39%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        },
      },
    },
  },
});
