import { SVGProps } from 'react';

export interface INavLink {
  name: string;
  route: string;
}

export interface IThemeButtonProps {
  className: string;
}

export type Theme = 'light' | 'dark';

export interface ICurrencyData {
  data: ICurrency;
}

export interface ICurrency {
  code: string;
  decimal_digits: number;
  name: string;
  name_plural: string;
  rounding: number;
  symbol: string;
  symbol_native: string;
}

export enum CurrenciesList {
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
  CHF = 'CHF',
  AUD = 'AUD',
  CNY = 'CNY',
  PLN = 'PLN',
  UAH = 'UAH',
  BYN = 'BYN',
  JPY = 'JPY',
}

export interface IGetCurrenciesParams {
  currencies: string;
  base?: keyof typeof CurrenciesList;
}

export interface ICurrencyResponce {
  data: {
    [key: string]: ICurrenciesValues;
  };
  meta: {
    last_updated_at: string;
  };
}

export interface ICurrenciesValues {
  code: string;
  value: number;
}

export interface ICurrencyParams {
  data: {
    [key: string]: ICurrency;
  };
}

export interface IOption {
  currency: keyof typeof CurrenciesList;
  onCLick: (currency: keyof typeof CurrenciesList) => void;
}

export interface ICurrencyCardParams {
  price: number;
  name: string;
  symbol: string;
  index: number;
  currency: string;
  onClick: (currency: string) => void;
}

export interface ICosts {
  [key: string]: {
    [key: string]: ICurrenciesValues;
  };
}

export interface IContact {
  contact: string;
  linkName?: string;
  linkType?: string;
}

export interface IMedia {
  name: string;
  link: string;
  icon: (props: SVGProps<SVGElement>) => React.ReactElement<React.JSXElementConstructor<any>>;
}
