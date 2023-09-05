import { CurrenciesList } from '@constants/enums';

export interface IOption {
  currency: keyof typeof CurrenciesList;
  onCLick: (currency: keyof typeof CurrenciesList) => void;
}
