import { Box, Link, Typography } from "@mui/material";

const copyrightText = "Copyright © ";
const githubLink = "https://github.com/nikitazviahin";
const authorNameText = "Mykyta Zviahin";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box
      sx={{
        width: "100%",
        bottom: 0,
        position: "fixed",
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid black",
      }}
    >
      <Typography variant={"body2"} align={"center"}>
        {copyrightText}
        <Link color={"inherit"} href={githubLink}>
          {authorNameText}
        </Link>{" "}
        {date}
        {"."}
      </Typography>
    </Box>
  );
};
