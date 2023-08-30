import './index.scss';

import { Spinner } from '@components/loader';
import { Modal } from '@components/modal/indsx';
import UpdateTime from '@components/update-time';
import { CurrenciesList, ICosts } from '@constants/types';
import { setModal } from '@store/reducers/app-reducer';
import { useGetCurrenciesCostsQuery, useGetCurrenciesDataQuery } from '@store/reducers/currencies-api';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { FC, useCallback, useEffect, useState } from 'react';

import { CurrencyCard } from './currency-card';

export const Currencies: FC = () => {
  const currenciesList = Object.keys(CurrenciesList).join(',');
  const { currenciesDataSkip, currensiesPricesSkip } = getSkipConditions();
  const { modal } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();

  const { data: currenciesData, isFetching: isFetchingData } = useGetCurrenciesDataQuery(
    { currencies: currenciesList },
    { skip: currenciesDataSkip },
  );
  const { data: currenciesPrice, isFetching: isFetchingPrices } = useGetCurrenciesCostsQuery(
    { currencies: currenciesList },
    { skip: currensiesPricesSkip },
  );

  const [currencies, setCurrencies] = useState(getInitialCurrencies);
  const [prices, setPrices] = useState(geInitialPrices);
  const [modalCurrency, setModalCurrency] = useState<CurrenciesList>(null);

  const isLoading = isFetchingData || isFetchingPrices;
  const showCards = currencies && prices;

  function getSkipConditions() {
    const lastUpdateDate = localStorage.getItem('update') || '';
    const currenciesData = localStorage.getItem('currenciesData') || null;

    const savedData = JSON.parse(localStorage.getItem('currenciesData'));
    const savedPrices = JSON.parse(localStorage.getItem('currenciesPrice'));

    return {
      currenciesDataSkip: Boolean(currenciesData) && savedData,
      currensiesPricesSkip: lastUpdateDate === new Date().toDateString() && savedPrices,
    };
  }

  function geInitialPrices() {
    return JSON.parse(localStorage.getItem('currenciesPrice'));
  }

  function getInitialCurrencies() {
    return JSON.parse(localStorage.getItem('currenciesData'));
  }

  const handlerOnClick = useCallback(
    (currency: string) => {
      setModalCurrency(currency as CurrenciesList);
      dispatch(setModal(true));
    },
    [dispatch],
  );

  useEffect(() => {
    if (currenciesPrice) {
      const updateDate = new Date(currenciesPrice.meta.last_updated_at).toDateString();
      const costs: ICosts = {
        [CurrenciesList.BYN]: currenciesPrice.data,
      };

      localStorage.setItem('currenciesPrice', JSON.stringify(currenciesPrice));
      localStorage.setItem('update', updateDate);
      localStorage.setItem('costs', JSON.stringify(costs));

      setPrices(currenciesPrice);
    }

    if (currenciesData) {
      localStorage.setItem('currenciesData', JSON.stringify(currenciesData));
      setCurrencies(currenciesData);
    }
  }, [currenciesPrice, currenciesData]);

  useEffect(() => {
    if (!currenciesDataSkip && !currensiesPricesSkip) {
      setCurrencies(currenciesData);
      setPrices(currenciesPrice);
    }
  }, [currenciesPrice, currenciesData, currenciesDataSkip, currensiesPricesSkip]);

  return (
    <article className='currencies' data-testid='currencies'>
      <div className='currencies__container container'>
        <UpdateTime />
        {isLoading && <Spinner />}
        <ul className='currencies__list'>
          {showCards &&
            Object.keys(currencies.data).map((currency, index) => {
              const { name, symbol } = currencies.data[currency];
              return (
                <CurrencyCard
                  name={name}
                  symbol={symbol}
                  key={name}
                  price={prices.data[currency].value}
                  index={index + 1}
                  onClick={handlerOnClick}
                  currency={currency}
                />
              );
            })}
        </ul>
        {modal && <Modal currency={modalCurrency} />}
      </div>
    </article>
  );
};
