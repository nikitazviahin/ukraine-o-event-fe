import { AxiosResponse } from "axios";
import {
  ICreateCompetitionResponse,
  TCreateCompetition,
  TGetCompetitionServiceResponse,
} from "../types/competition.types";
import { competitionsPath } from "./paths";
import axiosInstance from "../axios/axios.interceptor";

export class CompetitionService {
  public async getCompetitions(): Promise<
    AxiosResponse<TGetCompetitionServiceResponse>
  > {
    try {
      const response = await axiosInstance.get<TGetCompetitionServiceResponse>(
        competitionsPath
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async createCompetition(
    data: TCreateCompetition
  ): Promise<AxiosResponse<ICreateCompetitionResponse>> {
    try {
      const response = await axiosInstance.post<ICreateCompetitionResponse>(
        competitionsPath,
        data
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}

const CompetitionServiceInstance = new CompetitionService();

export { CompetitionServiceInstance };
