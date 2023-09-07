import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const baseUrl = 'https://api.currencyapi.com/v3';

const $axios = axios.create({
  baseURL: baseUrl,
});

export const axiosBaseQuery = async (request: AxiosRequestConfig): Promise<any> => {
  try {
    const response = await $axios(request);
    return { data: response.data };
  } catch (error) {
    const { response } = error as AxiosError;

    if (response) {
      return { error: response.data };
    }
    throw error;
  }
};

export default $axios;
