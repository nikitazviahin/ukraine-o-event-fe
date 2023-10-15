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
      "@media (max-width:600px)": {
        fontSize: "0.7rem",
      },
      "@media (max-width:450px)": {
        fontSize: "0.55rem",
      },
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: "0.3rem",
        },
      },
    },
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
          left: 0,
          right: 0,
          margin: "0 auto",
          maxWidth: "15rem",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          zIndex: 1000,
        },
      },
    },
  },
});
