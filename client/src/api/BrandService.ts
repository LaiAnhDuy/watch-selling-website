/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import { ENDPOINTS } from "../configs/endpoint";

export const brandApi = {
  getAllBrands: (): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(ENDPOINTS.BRAND);
    };
  },

  createBrand: (
    data: any,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post(ENDPOINTS.BRAND, data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },
};
