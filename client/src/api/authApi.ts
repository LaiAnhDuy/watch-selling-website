/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINTS } from "../configs/endpoint";
import axiosClient from "./axiosClient";
import { AxiosResponse } from "axios";

export const authAPi = {
  login: (data: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.post(ENDPOINTS.SIGN_IN, data);
  },
  register: (data: any) => (): Promise<AxiosResponse<any, any>> => {
    return axiosClient.post(ENDPOINTS.SIGN_UP, data, {
      withCredentials: true,
    });
  },
};
