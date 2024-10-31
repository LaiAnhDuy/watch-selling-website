/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { RRError } from "../types/Api";

export default async function apiCaller<R>({
  request,
  errorHandler = defaultErrorHandler,
}: {
  request: () => Promise<AxiosResponse<R>>;
  errorHandler?: (error: RRError) => void;
}): Promise<AxiosResponse<R> | null> {
  try {
    const response = await request();
    return response;
  } catch (error: any) {
    errorHandler(error as RRError);
  }

  return null;
}

function defaultErrorHandler(error: RRError) {
  console.error("An error occurred:", error);
}
