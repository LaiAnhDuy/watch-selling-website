/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import { ENDPOINTS } from "../configs/endpoint";

export const statisticApi = {
  getStatistic: (
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(ENDPOINTS.STATISTIC, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },
};
