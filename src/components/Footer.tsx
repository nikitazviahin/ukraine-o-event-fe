import { Box, Link, Typography } from "@mui/material";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box
      sx={{
        width: "100%",
        bottom: 0,
        position: "fixed",
      }}
    >
      <Typography variant="body2" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/nikitazviahin">
          {"Mykyta Zviahin"}
        </Link>{" "}
        {date}
        {"."}
      </Typography>
    </Box>
  );
};
