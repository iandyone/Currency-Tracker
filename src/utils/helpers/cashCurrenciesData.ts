import { ICosts, ICurrencyResponce } from '@appTypes/index';

export function saveCurrenciesData(currenciesPrice: ICurrencyResponce, costs: ICosts) {
  localStorage.setItem('currenciesPrice', JSON.stringify(currenciesPrice));
  localStorage.setItem('update', String(new Date().getTime()));
  localStorage.setItem('costs', JSON.stringify(costs));
}
