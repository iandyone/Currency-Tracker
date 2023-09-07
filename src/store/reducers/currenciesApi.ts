import { ICurrencyParams, ICurrencyResponce, IGetCurrenciesParams } from '@appTypes/index';
import { axiosBaseQuery } from '@config/axios';
import { CurrenciesList } from '@constants/enums';
import { createApi } from '@reduxjs/toolkit/query/react';

const currencyApiKey = process.env.REACT_APP_CURRENCY_API_KEY;

export const currenciesApi = createApi({
  reducerPath: 'currenciesApi',
  baseQuery: axiosBaseQuery,
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
