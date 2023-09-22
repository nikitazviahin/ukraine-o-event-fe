import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ERoutes } from "../constants/routes.enum";
import { UkrainianFlag } from "./icons/UkrainianFlag";

const ukraineOEventText = "Ukraine O-Event";
const loginText = "Login";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogInRedirect = () => navigate(ERoutes.login);
  const handleHomeRedirect = () => navigate(ERoutes.root);

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

          <Button onClick={handleLogInRedirect}>
            <Typography variant="button">{loginText}</Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
