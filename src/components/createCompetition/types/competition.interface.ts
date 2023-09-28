import { EClass } from "../../../types/enums/class.enum";

export interface ICompetiton {
  _id?: string;

  name: string;

  description: string;

  competitionDate: string;

  place: string;

  classes: EClass[];

  ownerId: string;
}
