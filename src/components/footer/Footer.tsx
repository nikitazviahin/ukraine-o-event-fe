import { Box, Link, Typography } from "@mui/material";

import { footerStyle } from "../../styles/footer.style";

const copyrightText = "Copyright © ";
const githubLink = "https://github.com/nikitazviahin";
const authorNameText = "MZ";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box sx={footerStyle}>
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
