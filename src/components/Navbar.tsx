import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ERoutes } from "../constants/routes.enum";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleSignUpRedirect = () => navigate(ERoutes.signup);
  const handleLogInRedirect = () => navigate(ERoutes.login);
  const handleHomeRedirect = () => navigate(ERoutes.root);

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button onClick={handleHomeRedirect}>
              <Typography variant="button">Ukraine O-Event</Typography>
            </Button>
          </Box>

          <Button onClick={handleSignUpRedirect}>
            <Typography variant="button">Signup</Typography>
          </Button>

          <Button onClick={handleLogInRedirect}>
            <Typography variant="button">Login</Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
