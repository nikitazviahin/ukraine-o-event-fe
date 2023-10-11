import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import LanguageSelector from "./LanguageSelector";
import { HomeButton } from "./HomeButton";
import { CreateCompetitionButton } from "./CreateCompetitionButton";
import { LogInButton } from "./LogInButton";

export const Navbar = () => {
  return (
    <AppBar position={"static"}>
      <Container>
        <Toolbar>
          <HomeButton />
          <CreateCompetitionButton />
          <LogInButton />
          <LanguageSelector />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
