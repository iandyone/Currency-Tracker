import { SVGProps } from 'react';

export type handlerWithStringProps = (name: string) => void;

export type Theme = 'light' | 'dark';

export enum BankMaps {
  PRIOR = 'mapbox://styles/iandyone/cllw8h6uk00ha01pf2q327g48',
  ALPHA = 'mapbox://styles/iandyone/cllw9lf8l00gn01pjbzcub87a',
  ALL = 'mapbox://styles/iandyone/cllw9d9pg00gf01r49ilh84cz',
  NONE = 'mapbox://styles/iandyone/cllwb75il00gq01r49glw5j40',
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

export interface INavLink {
  name: string;
  route: string;
}

export interface IThemeButtonProps {
  className: string;
}

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

export interface ICostInputProps {
  id: number;
  setCost: (id: number, value: number) => void;
}

export interface ICostInputState {
  value: string;
}

export interface ISelectState {
  // option: string;
  currencies: string[];
  showMenu: boolean;
}

export interface ICurrencyGraphState {
  showGraphButton: boolean;
  showGraph: boolean;
  requiredValues: number;
  option: string;
  costs: {
    [key: number]: number;
  };
}

export interface ISelectProps {
  handlerOnClick: (option: string) => void;
  option: string;
}

export interface ISearchProps {
  className: string;
  handlerOnClick?: handlerWithStringProps;
}

export interface IFooterColumn {
  column: string;
  links: IFooterLink[];
}

export interface IFooterLink {
  name: string;
  route: string;
}
