import { EClass } from "./enums/class.enum";

export interface ICompetiton {
  _id?: string;
  name: string;
  description: string;
  competitionDate: string;
  place: string;
  classes: EClass[];
  ownerId: string;
}

export type TGetCompetitionServiceResponse = ICompetiton[];

export type TCreateCompetition = Omit<ICompetiton, "ownerId">;

export interface ICreateCompetitionResponse {
  competitionId: string;
}
