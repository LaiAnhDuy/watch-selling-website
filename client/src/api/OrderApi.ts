/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import { ENDPOINTS } from "../configs/endpoint";

export const orderApi = {
  createOrder: (
    data: any,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post(ENDPOINTS.ORDER, data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  getOrderByUserId: (
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(ENDPOINTS.ORDER, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  getDetailsOrder: (
    id: string,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(`${ENDPOINTS.ORDER}/${id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  cancelOrder: (
    id: string,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.patch(`${ENDPOINTS.ORDER}/${id}/cancel`, {}, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  getAllOrder: (
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(`${ENDPOINTS.ORDER}/all-order`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  updateStatusOrder: (
    id: string,
    status: any,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.patch(`${ENDPOINTS.ORDER}/${id}/status`, status, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },
};
