import { CurrenciesList, ICurrencyParams, ICurrencyResponce, IGetCurrenciesParams } from '@constants/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currenciesApi = createApi({
  reducerPath: 'currenciesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.currencyapi.com/v3',
  }),
  endpoints: (build) => ({
    getCurrenciesCosts: build.query<ICurrencyResponce, IGetCurrenciesParams>({
      query: ({ currencies, base }) => ({
        url: '/latest',
        method: 'GET',
        params: {
          apikey: 'cur_live_cVpV5d9OvabvVEPBYrMev3oyVt8L4CVjgRsOmRRy',
          currencies: currencies,
          base_currency: base || CurrenciesList.BYN,
        },
      }),
    }),
    getCurrenciesData: build.query<ICurrencyParams, IGetCurrenciesParams>({
      query: ({ currencies }) => ({
        url: '/currencies',
        method: 'GET',
        params: {
          apikey: 'cur_live_cVpV5d9OvabvVEPBYrMev3oyVt8L4CVjgRsOmRRy',
          currencies: currencies,
        },
      }),
    }),
  }),
});

export const { useGetCurrenciesCostsQuery, useGetCurrenciesDataQuery } = currenciesApi;
