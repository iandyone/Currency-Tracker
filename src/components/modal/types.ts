import { CurrenciesList } from '@constants/enums';

export interface IModalProps {
  currency: keyof typeof CurrenciesList;
}
