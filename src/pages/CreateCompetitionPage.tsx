import { useNavigate } from "react-router-dom";
import { CreateCompetitionForm } from "../components/createCompetition/CreateCompetitionForm";
import { getIsCreator } from "../helpers/getIsCreator";
import { ERoutes } from "../types/enums/route.enum";
import { useEffect } from "react";

export const CreateCompetitionPage = () => {
  const navigate = useNavigate();

  const isCreator = getIsCreator();

  useEffect(() => {
    if (!isCreator) {
      navigate(ERoutes.root);
    }
  }, [isCreator, navigate]);

  return <CreateCompetitionForm />;
};
