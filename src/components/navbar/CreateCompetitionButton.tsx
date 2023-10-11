import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

import { ERoutes } from "../../types/enums/route.enum";
import { getIsCreator } from "../../helpers/getIsCreator";

export const CreateCompetitionButton = () => {
  const navigate = useNavigate();
  const handleCreateCompetitionRedirect = () =>
    navigate(ERoutes.createCompetition);

  const isCreator = getIsCreator();

  return (
    <>
      {isCreator && (
        <Button variant={"contained"} onClick={handleCreateCompetitionRedirect}>
          <Typography variant={"button"}>
            {t(`competition.createCompetition`)}
          </Typography>
        </Button>
      )}
    </>
  );
};
