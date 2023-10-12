import { useState } from "react";
import { t } from "i18next";
import { Box, Button, Typography } from "@mui/material";

import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const actionButtonText = isSignUp ? t(`auth.register`) : t(`auth.logIn`);
  const switchButtonText = isSignUp
    ? t(`auth.switchToLogin`)
    : t(`auth.switchToRegister`);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      maxWidth={"20rem"}
      alignItems={"center"}
      margin={"auto"}
      marginTop={"4rem"}
      padding={"1rem"}
      borderRadius={3}
      boxShadow={"2px 2px 5px #ccc"}
    >
      {isSignUp ? (
        <RegisterForm
          actionButtonText={actionButtonText}
          setIsSignUp={setIsSignUp}
        />
      ) : (
        <LoginForm actionButtonText={actionButtonText} />
      )}
      <Button
        variant={"contained"}
        size={"small"}
        onClick={() => setIsSignUp(!isSignUp)}
      >
        <Typography variant={"button"}>{switchButtonText}</Typography>
      </Button>
    </Box>
  );
};
