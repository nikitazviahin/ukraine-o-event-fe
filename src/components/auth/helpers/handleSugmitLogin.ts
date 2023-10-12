import { HttpStatusCode } from "axios";

import { ILoginBody } from "../../../types/auth.types";
import { AuthServiceInstance } from "../../../api/auth.api";
import {
  jwtTokenConst,
  userDataConst,
  userRolesConst,
} from "../../../constants/localStorage";

export async function handleSubmitLogin(values: ILoginBody) {
  const res = await AuthServiceInstance.postLoginRequest(values);

  const token = res.data.access_token;
  if (!token) throw new Error("Unable to get token");

  const getUserProfileResponse =
    await AuthServiceInstance.getUserProfileRequest(token);

  const isGetProfileSuccess =
    getUserProfileResponse &&
    getUserProfileResponse.status === HttpStatusCode.Ok;

  if (!isGetProfileSuccess) {
    throw new Error("Unable to get user's profile");
  }

  localStorage.setItem(jwtTokenConst, token);
  localStorage.setItem(
    userDataConst,
    JSON.stringify(getUserProfileResponse.data)
  );
  localStorage.setItem(
    userRolesConst,
    JSON.stringify(getUserProfileResponse.data.roles)
  );
}
