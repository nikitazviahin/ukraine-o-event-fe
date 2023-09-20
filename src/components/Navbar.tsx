import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ERoutes } from "../constants/routes.enum";

export const Navbar: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleSignUpRedirect = () => navigate(ERoutes.signup);
  const handleLogInRedirect = () => navigate(ERoutes.login);
  const handleHomeRedirect = () => navigate(ERoutes.root);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Button color="inherit" onClick={handleHomeRedirect}>
                Ukraine O-Event
              </Button>
            </Box>
            <Button color="inherit" onClick={handleSignUpRedirect}>
              Signup
            </Button>
            <Button color="inherit" onClick={handleLogInRedirect}>
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
