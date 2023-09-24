import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ICompetiton } from "./interfaces/competition.interface";
import { CompetitionServiceInstance } from "../../services/competitionService";

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

  return (
    <Box sx={{ marginTop: "2rem", border: 1 }}>
      <Typography sx={{ padding: 0.5 }}>Events:</Typography>
      {competitions.map((c) => {
        return <Typography>{`${c.name}`}</Typography>;
      })}
    </Box>
  );
};
