import { AxiosResponse } from "axios";

import {
  IGetProfileResponse,
  ILoginBody,
  ILoginResponse,
  ISignUpBody,
  ISignUpResponse,
} from "../types/auth.types";
import { getProfilePath, loginPath, signUpPath } from "../api/paths";
import axiosInstance from "../axios/axios.interceptor";

export class AuthService {
  public async postLoginRequest(
    userData: ILoginBody
  ): Promise<AxiosResponse<ILoginResponse>> {
    try {
      const data = await axiosInstance.post<ILoginResponse>(loginPath, {
        ...userData,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async postSignUpRequest(
    userData: ISignUpBody
  ): Promise<AxiosResponse<ISignUpResponse>> {
    try {
      const data = await axiosInstance.post<ISignUpResponse>(signUpPath, {
        ...userData,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getUserProfileRequest(): Promise<
    AxiosResponse<IGetProfileResponse>
  > {
    try {
      const data = await axiosInstance.get<IGetProfileResponse>(getProfilePath);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

const AuthServiceInstance = new AuthService();

export { AuthServiceInstance };
