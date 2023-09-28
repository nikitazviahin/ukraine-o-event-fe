import axios, { AxiosResponse } from "axios";
import {
  ICreateCompetitionResponse,
  TCreateCompetition,
  TGetCompetitionServiceResponse,
} from "../types/competition.types";
import { competitionsPath } from "./paths";

export class CompetitionService {
  public async getCompetitions(): Promise<
    AxiosResponse<TGetCompetitionServiceResponse>
  > {
    try {
      const response = await axios.get<TGetCompetitionServiceResponse>(
        competitionsPath
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async createCompetition(
    data: TCreateCompetition,
    token: string | null
  ): Promise<AxiosResponse<ICreateCompetitionResponse>> {
    try {
      const response = await axios.post<ICreateCompetitionResponse>(
        competitionsPath,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}

const CompetitionServiceInstance = new CompetitionService();

export { CompetitionServiceInstance };
