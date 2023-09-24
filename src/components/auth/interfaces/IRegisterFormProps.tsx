import { Dispatch, SetStateAction } from "react";

export interface IRegisterFormProps {
  isSignUp: boolean;
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}
