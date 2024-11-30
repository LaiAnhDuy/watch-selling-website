/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import { ENDPOINTS } from "../configs/endpoint";

export const commentApi = {
  createComment: (
    data: any,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post(ENDPOINTS.COMMENT, data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  getComment: (
    params: any
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(ENDPOINTS.COMMENT, {
        params,
      });
    };
  },
};
