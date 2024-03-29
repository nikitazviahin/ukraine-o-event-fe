import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

import { ERoutes } from "../../types/enums/route.enum";
import { UkrainianFlag } from "../icons/UkrainianFlag";
import { homeButtonBoxStyle } from "../../styles/homebButtonBox.style";

export const HomeButton = () => {
  const navigate = useNavigate();
  const handleHomeRedirect = () => navigate(ERoutes.root);

  return (
    <Box sx={homeButtonBoxStyle}>
      <Button onClick={handleHomeRedirect}>
        <Typography variant={"button"}>{t(`global.ukraineOEvent`)}</Typography>
        <UkrainianFlag />
      </Button>
    </Box>
  );
};
