import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ERoutes } from "../constants/routes.enum";
import { Container } from "@mui/material";

export const Navbar: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleSignUpRedirect = () => navigate(ERoutes.signup);
  const handleLogInRedirect = () => navigate(ERoutes.login);
  const handleHomeRedirect = () => navigate(ERoutes.root);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Ukraine O-Event
            </Typography>
            <Button color="inherit" onClick={handleHomeRedirect}>
              Home
            </Button>
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
