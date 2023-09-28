import { Box, Link, Typography } from "@mui/material";
import { footerStyles } from "./styles/footer.styles";

const copyrightText = "Copyright © ";
const githubLink = "https://github.com/nikitazviahin";
const authorNameText = "Mykyta Zviahin";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box sx={footerStyles.sx}>
      <Typography variant="body2" align="center">
        {copyrightText}
        <Link color="inherit" href={githubLink}>
          {authorNameText}
        </Link>{" "}
        {date}
        {"."}
      </Typography>
    </Box>
  );
};
