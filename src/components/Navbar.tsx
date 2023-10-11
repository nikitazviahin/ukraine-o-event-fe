import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { ERoutes } from "../types/enums/route.enum";
import { UkrainianFlag } from "./icons/UkrainianFlag";
import { jwtTokenConst } from "../constants/localStorage";
import { getIsCreator } from "../helpers/getIsCreator";

const ukraineOEventText = "Ukraine O-Event";
const createCompetitionText = "Create Competition";
const loginText = "Log in";
const logOutText = "Log out";

export const Navbar = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(jwtTokenConst)
  );

  const navigate = useNavigate();
  const handleLogInRedirect = () => navigate(ERoutes.login);
  const handleHomeRedirect = () => navigate(ERoutes.root);
  const handleCreateCompetitionRedirect = () =>
    navigate(ERoutes.createCompetition);

  const isCreator = getIsCreator();

  const handleLogout = () => {
    localStorage.clear();
    setToken(() => null);
    navigate(ERoutes.root);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button onClick={handleHomeRedirect}>
              <Typography variant="button">{ukraineOEventText}</Typography>
              <UkrainianFlag />
            </Button>
          </Box>

          {isCreator && (
            <Button
              variant={"contained"}
              onClick={handleCreateCompetitionRedirect}
            >
              <Typography variant="button">{createCompetitionText}</Typography>
            </Button>
          )}

          {token ? (
            <Button variant={"contained"}>
              <Typography variant="button" onClick={handleLogout}>
                {logOutText}
              </Typography>
            </Button>
          ) : (
            <Button variant={"contained"} onClick={handleLogInRedirect}>
              <Typography variant="button">{loginText}</Typography>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
