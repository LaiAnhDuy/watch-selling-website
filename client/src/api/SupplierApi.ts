/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import { ENDPOINTS } from "../configs/endpoint";

export const supplierApi = {
  // Lấy danh sách nhà cung cấp
  getAllSuppliers: (
    supplierID?: string,
    accessToken?: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(ENDPOINTS.SUPPLIERS, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: supplierID ? { supplierID } : undefined,
      });
    };
  },

  // Tạo nhà cung cấp mới
  createSupplier: (
    data: any,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.post(ENDPOINTS.SUPPLIERS, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  // Lấy danh sách thương hiệu sản phẩm liên quan đến nhà cung cấp
  getBrandsOfProduct: (
    data: any,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.get(ENDPOINTS.SUPPLIERS, {
        params: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },

  // Xóa nhà cung cấp
  deleteSupplier: (
    id: string,
    accessToken: string
  ): (() => Promise<AxiosResponse<any, any>>) => {
    return (): Promise<AxiosResponse<any, any>> => {
      return axiosClient.delete(`${ENDPOINTS.SUPPLIERS}/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    };
  },
};
