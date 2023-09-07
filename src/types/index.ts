import { LazyExoticComponent, ReactElement, SVGProps } from 'react';
import { CurrenciesList } from '../constants/enums';

export type Theme = 'light' | 'dark';
export type handlerWithStringProps = (name: string) => void;
export type handlerWithSVGProps = (props: SVGProps<SVGElement>) => ReactElement;
export type subscriber = (isDiagramCreated: boolean) => void;

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

export interface ICosts {
  [key: string]: {
    [key: string]: ICurrenciesValues;
  };
}

export interface IContact {
  contact: string;
  linkName?: string;
  linkType?: 'tel:' | 'mailto:';
}

export interface IMedia {
  name: string;
  link: string;
  icon: (props: SVGProps<SVGElement>) => ReactElement<React.JSXElementConstructor<any>>;
}

export interface ICostInputProps {
  id: number;
  setCost: (id: number, value: number) => void;
}

export interface ICostInputState {
  value: string;
  error: string;
}

export interface ICurrencyGraphState {
  showGraph: boolean;
  option: string;
  isDiagramCreated: boolean;
}

export interface IRoutesList {
  path: string;
  element: LazyExoticComponent<any>;
  index: boolean;
}

export interface IDiagramObserver {
  subscribe(sub: subscriber): void;
  unsubscribe(sub: subscriber): void;
  notify(isDiagramCreated: boolean): void;
}
