import { CurrenciesList } from '@constants/enums';

export function getCurrenciesList() {
  return Object.keys(CurrenciesList).join(',');
}
