import axios from "axios";
import {
  IGetProfileResponse,
  ILoginBody,
  ILoginResponse,
  ISignUpBody,
  ISignUpResponse,
} from "../interfaces/auth.interface";
import { getProfilePath, loginPath, signUpPath } from "../constants/authPaths";

export const postLoginRequest = async (userData: ILoginBody) => {
  try {
    const data = await axios.post<ILoginResponse>(loginPath, { ...userData });
    return data;
  } catch (error) {
    throw error;
  }
};

export const postSignUpRequest = async (userData: ISignUpBody) => {
  try {
    const data = await axios.post<ISignUpResponse>(signUpPath, { ...userData });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserProfileRequest = async (token: string) => {
  try {
    const data = await axios.get<IGetProfileResponse>(getProfilePath, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {}
};
