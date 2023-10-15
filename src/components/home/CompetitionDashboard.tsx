import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CompetitionServiceInstance } from "../../api/competition.api";
import { ICompetiton } from "../../types/competition.types";
import { t } from "i18next";

export const CompetitionDashboard = () => {
  const [competitions, setCompetitions] = useState<ICompetiton[]>([]);

  const fetchCompetitions = async () => {
    const response = await CompetitionServiceInstance.getCompetitions();
    return response.data;
  };

  useEffect(() => {
    fetchCompetitions().then((competitions) => {
      setCompetitions(() => competitions);
    });
  }, []);

  console.log(competitions[3]);

  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant={"h5"}>
          {t("competitionDashboard.events")}
        </Typography>
      </Box>
      <Box sx={{ border: 1 }}>
        {competitions.map((c) => {
          return (
            <Typography
              key={c._id}
            >{`${c._id} ${c.competitionDate} ${c.classes}`}</Typography>
          );
        })}
      </Box>
    </Box>
  );
};
