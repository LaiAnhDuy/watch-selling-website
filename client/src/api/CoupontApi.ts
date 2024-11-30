/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import { ENDPOINTS } from "../configs/endpoint";

export const couponApi = {
  getAllCoupon: (
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(ENDPOINTS.COUPON, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  createCoupon: (
    data: any,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post(ENDPOINTS.COUPON, data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  usedCoupon: (
    data: any,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post(`${ENDPOINTS.COUPON}/used`, data, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  deleteCoupon: (
    id: string,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.delete(`${ENDPOINTS.COUPON}/${id}`, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },
};
