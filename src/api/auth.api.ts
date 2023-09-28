import axios, { AxiosResponse } from "axios";
import {
  IGetProfileResponse,
  ILoginBody,
  ILoginResponse,
  ISignUpBody,
  ISignUpResponse,
} from "../types/auth.types";
import { getProfilePath, loginPath, signUpPath } from "../api/paths";

export class AuthService {
  public async postLoginRequest(
    userData: ILoginBody
  ): Promise<AxiosResponse<ILoginResponse>> {
    try {
      const data = await axios.post<ILoginResponse>(loginPath, { ...userData });
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async postSignUpRequest(
    userData: ISignUpBody
  ): Promise<AxiosResponse<ISignUpResponse>> {
    try {
      const data = await axios.post<ISignUpResponse>(signUpPath, {
        ...userData,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getUserProfileRequest(
    token: string
  ): Promise<AxiosResponse<IGetProfileResponse>> {
    try {
      const data = await axios.get<IGetProfileResponse>(getProfilePath, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

const AuthServiceInstance = new AuthService();

export { AuthServiceInstance };
