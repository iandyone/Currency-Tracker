import { handlerWithStringProps } from '@constants/types';

export interface ISelectProps {
  handlerOnClick: handlerWithStringProps;
  option: string;
}

export interface ISelectState {
  currencies: string[];
  showMenu: boolean;
}
