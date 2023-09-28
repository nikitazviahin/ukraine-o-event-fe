import { useNavigate } from "react-router-dom";
import { CreateCompetitionForm } from "../components/createCompetition/CreateCompetitionForm";
import { jwtTokenConst } from "../constants/localStorage";
import { getIsCreator } from "../helpers/getIsCreator";
import { ERoutes } from "../types/enums/route.enum";
import { useEffect } from "react";

export const CreateCompetitionPage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem(jwtTokenConst);
  const isCreator = getIsCreator();

  useEffect(() => {
    if (!token || !isCreator) {
      navigate(ERoutes.root);
    }
  }, [isCreator, navigate, token]);

  return <CreateCompetitionForm />;
};
