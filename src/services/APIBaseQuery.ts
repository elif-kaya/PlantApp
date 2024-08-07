import axios, { AxiosRequestConfig } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';

interface CustomError {
  status: number;
  data: unknown;
}

export const APIBaseQuery =
  ({ baseUrl }: { baseUrl: string }): BaseQueryFn<string | AxiosRequestConfig, unknown, CustomError> =>
  async (args) => {
    try {
      // Determine if args is a string or an AxiosRequestConfig
      const config: AxiosRequestConfig =
        typeof args === 'string'
          ? { url: args, method: 'GET' } // Default to GET if args is a string
          : args;

      // Prepend baseUrl to the URL
      const result = await axios({
        ...config,
        url: `${baseUrl}${config.url}`,
      });

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as any; // Cast to any to access response properties

      return {
        error: {
          status: err.response?.status ?? 500,
          data: err.response?.data ?? err.message,
        },
      };
    }
  };
