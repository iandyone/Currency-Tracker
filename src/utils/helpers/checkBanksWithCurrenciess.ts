import { BankMaps, CurrenciesList } from '@constants/enums';

export function checkBanksWithCurrencies(currency: string) {
  switch (currency) {
    case CurrenciesList.BYN:
    case CurrenciesList.USD:
    case CurrenciesList.EUR:
    case CurrenciesList.PLN:
      return BankMaps.ALL;

    case CurrenciesList.AUD:
    case CurrenciesList.GBP:
    case CurrenciesList.CHF:
      return BankMaps.ALPHA;

    case CurrenciesList.CNY:
    case CurrenciesList.JPY:
    case CurrenciesList.UAH:
      return BankMaps.PRIOR;

    default:
      return BankMaps.NONE;
  }
}
