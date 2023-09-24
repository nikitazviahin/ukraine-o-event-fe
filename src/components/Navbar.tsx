import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { ERoutes } from "../constants/routes.enum";
import { UkrainianFlag } from "./icons/UkrainianFlag";
import { jwtToken } from "../constants/authLocalStorageData";
import { useEffect, useState } from "react";

const ukraineOEventText = "Ukraine O-Event";
const loginText = "Log in";
const logOutText = "Log out";

export const Navbar = () => {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleLogInRedirect = () => navigate(ERoutes.login);
  const handleHomeRedirect = () => navigate(ERoutes.root);

  const handleLogout = () => {
    localStorage.clear();
    setToken(() => null);
  };

  useEffect(() => {
    setToken(() => localStorage.getItem(jwtToken));
  }, [token]);

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

          {token ? (
            <Button>
              <Typography variant="button" onClick={handleLogout}>
                {logOutText}
              </Typography>
            </Button>
          ) : (
            <Button onClick={handleLogInRedirect}>
              <Typography variant="button">{loginText}</Typography>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
