import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { t } from "i18next";

import {
  jwtTokenConst,
  userDataConst,
  userRolesConst,
} from "../../constants/localStorage";
import { ERoutes } from "../../types/enums/route.enum";

export const LogInButton = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(jwtTokenConst)
  );

  const navigate = useNavigate();
  const handleLogInRedirect = () => navigate(ERoutes.login);

  const handleLogout = () => {
    localStorage.removeItem(jwtTokenConst);
    localStorage.removeItem(userDataConst);
    localStorage.removeItem(userRolesConst);

    setToken(() => null);
    navigate(ERoutes.root);
  };

  return (
    <>
      {token ? (
        <Button variant={"contained"}>
          <Typography variant={"button"} onClick={handleLogout}>
            {t(`auth.logOut`)}
          </Typography>
        </Button>
      ) : (
        <Button variant={"contained"} onClick={handleLogInRedirect}>
          <Typography variant={"button"}>{t(`auth.logIn`)}</Typography>
        </Button>
      )}
    </>
  );
};
