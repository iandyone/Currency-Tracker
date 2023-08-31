import { CurrenciesList } from '@constants/enums';
import { ICurrencyParams, ICurrencyResponce, IGetCurrenciesParams } from '@constants/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const currencyApiKey = process.env.REACT_APP_CURRENCY_API_KEY;

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
          apikey: currencyApiKey,
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
          apikey: currencyApiKey,
          currencies: currencies,
        },
      }),
    }),
  }),
});

export const { useGetCurrenciesCostsQuery, useGetCurrenciesDataQuery } = currenciesApi;
