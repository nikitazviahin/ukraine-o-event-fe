import { EUserRole } from "./role.enum";

export interface ILoginBody {
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
}

export interface ISignUpBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  orienteeringClub?: string;
}

export interface ISignUpResponse {
  id: string;
}

export interface IGetProfileResponse {
  email: string;
  id: string;
  roles: EUserRole[];
  iat: number;
  exp: number;
}
