import { userRolesConst } from "../constants/localStorage";
import { EUserRole } from "../types/enums/role.enum";

export const getIsCreator = () => {
  const userRoles = JSON.parse(localStorage.getItem(userRolesConst) || "[]");

  return userRoles.includes(EUserRole.Creator);
};
