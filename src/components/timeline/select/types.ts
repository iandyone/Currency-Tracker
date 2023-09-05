import { handlerWithStringProps } from '@appTypes/index';

export interface ISelectProps {
  handlerOnClick: handlerWithStringProps;
  option: string;
}

export interface ISelectState {
  currencies: string[];
  showMenu: boolean;
}
