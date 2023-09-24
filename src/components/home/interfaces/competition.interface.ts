import { EClass } from "./class.enum";

export interface ICompetiton {
  name: string;

  description: string;

  competitionDate: string;

  place: string;

  classes: EClass[];

  ownerId: string;
}
