import { handlerWithStringProps, ICurrencyParams } from '@appTypes/index';

export interface ISelectProps {
  handlerOnClick: handlerWithStringProps;
  option: string;
  data?: ICurrencyParams;
}

export interface ISelectState {
  currencies: string[];
  showMenu: boolean;
}
