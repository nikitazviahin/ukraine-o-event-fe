import { ICompetiton } from "../components/createCompetition/types/competition.interface";

export type TGetCompetitionServiceResponse = ICompetiton[];

export type TCreateCompetition = Omit<ICompetiton, "ownerId">;

export interface ICreateCompetitionResponse {
  competitionId: string;
}
