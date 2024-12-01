/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import { ENDPOINTS } from "../configs/endpoint";

export const userApi = {
  login: (data: any): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post(ENDPOINTS.SIGN_IN, data);
    };
  },

  register: (data: any): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post(ENDPOINTS.SIGN_UP, data);
    };
  },

  getDetailsUser: (
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get("/user/",);
    };
  },

  refreshToken: (
    refreshToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post("/user/refresh-token", { refreshToken });
    };
  },

  logoutUser: (): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post("/user/log-out");
    };
  },

  getAllUser: (
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get("/user/list",);
    };
  },

  updateUser: (
    id: string,
    data: any,
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.patch(`/user/${id}`, data);
    };
  },

  deleteUser: (
    id: string,
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.delete(`/user/${id}`);
    };
  },

  sendMail: (data: {
    email: string;
  }): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post("/user/forgot-password", data);
    };
  },

  changePassword: (
    data: { oldPassword: string; newPassword: string },
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post("/user/change-password", data);
    };
  },
};
