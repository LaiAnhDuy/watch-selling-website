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
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get("/user/", {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
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
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get("/user/list", {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  updateUser: (
    id: string,
    data: any,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.patch(`/user/${id}`, data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  deleteUser: (
    id: string,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.delete(`/user/${id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
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
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post("/user/change-password", data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },
};
