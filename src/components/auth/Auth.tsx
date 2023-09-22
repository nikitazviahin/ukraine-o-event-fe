import { Box, Button } from "@mui/material";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const switchButtonText = isSignUp ? "switch to login" : " switch to register";

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      maxWidth={"20rem"}
      alignItems={"center"}
      margin="auto"
      marginTop={"4rem"}
      padding={"1rem"}
      borderRadius={3}
      boxShadow={"2px 2px 5px #ccc"}
    >
      {isSignUp ? (
        <RegisterForm isSignUp={isSignUp} />
      ) : (
        <LoginForm isSignUp={isSignUp} />
      )}
      <Button size="small" onClick={() => setIsSignUp(!isSignUp)}>
        {switchButtonText}
      </Button>
    </Box>
  );
};
