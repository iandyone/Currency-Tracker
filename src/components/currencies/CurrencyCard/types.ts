import { handlerWithStringProps } from '@constants/types';

export interface ICurrencyCardParams {
  price: number;
  name: string;
  symbol: string;
  index: number;
  currency: string;
  onClick: handlerWithStringProps;
}
