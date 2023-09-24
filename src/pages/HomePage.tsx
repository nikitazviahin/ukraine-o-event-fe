import { Container } from "@mui/material";
import { CompetitionDashboard } from "../components/home/CompetitionDashboard";
import { HomePageSideBar } from "../components/home/HomePageSideBar";

export const HomePage = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <Container sx={{ width: "20%" }}>
        <HomePageSideBar />
      </Container>
      <Container sx={{ width: "70%" }}>
        <CompetitionDashboard />
      </Container>
    </Container>
  );
};
