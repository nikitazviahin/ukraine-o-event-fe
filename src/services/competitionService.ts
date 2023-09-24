import axios, { AxiosResponse } from "axios";
import { TGetCompetitionServiceResponse } from "../interfaces/competitionService.interface";
import { getCompetitionsPath } from "../constants/axiosPaths";

export class CompetitionService {
  public async getCompetitions(): Promise<
    AxiosResponse<TGetCompetitionServiceResponse>
  > {
    try {
      const response = await axios.get<TGetCompetitionServiceResponse>(
        getCompetitionsPath
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}

const CompetitionServiceInstance = new CompetitionService();

export { CompetitionServiceInstance };
