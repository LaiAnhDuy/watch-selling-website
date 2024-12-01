/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import { ENDPOINTS } from "../configs/endpoint";

export const productApi = {
  getAllProduct: (
    data: any
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(ENDPOINTS.PRODUCTS.FILTER, { params: data });
    };
  },

  createProduct: (
    data: FormData,
    accessToken: string | undefined
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post(ENDPOINTS.PRODUCTS.BASE, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
    };
  },

  getDetailsProduct: (
    id: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(`${ENDPOINTS.PRODUCTS.BASE}/${id}`);
    };
  },

  updateProduct: (
    id: string,
    accessToken: string,
    data: any
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.patch(`${ENDPOINTS.PRODUCTS.BASE}/${id}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  deleteProduct: (
    id: string,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.delete(`${ENDPOINTS.PRODUCTS.BASE}/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  getAllTypesProduct: (): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(ENDPOINTS.PRODUCTS.TYPE);
    };
  },

  getAllCaliberProduct: (): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(ENDPOINTS.PRODUCTS.CALIBER);
    };
  },

  searchProduct: (
    term: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(`${ENDPOINTS.PRODUCTS.SEARCH}?name=${term}`);
    };
  },
};


export const fileApi = {
  uploadFile: (
    data: FormData,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post(ENDPOINTS.FILE_UPLOAD, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },
};
