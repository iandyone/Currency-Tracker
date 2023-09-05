import './index.scss';

import { ICosts } from '@appTypes/index';
import { CurrencyCard } from '@components/Currencies/CurrencyCard';
import { Modal } from '@components/Currencies/Modal';
import { Spinner } from '@components/Loader';
import { UpdateTime } from '@components/UpdateTime';
import { CurrenciesList } from '@constants/enums';
import { useDispatchTyped, useSelectorTyped } from '@hooks/reduxHooks';
import { setModal, useGetCurrenciesCostsQuery, useGetCurrenciesDataQuery } from '@store/reducers';
import { saveCurrenciesData } from '@utils/helpers/cashCurrenciesData';
import { getCurrenciesList } from '@utils/helpers/getCurrenciesList';
import { getSkipConditions } from '@utils/helpers/getFetchSkipConditions';
import { togglePageScroll } from '@utils/helpers/togglePageScroll';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

export const Currencies: FC = () => {
  const currenciesList = useMemo(getCurrenciesList, []);
  const skipConditions = useMemo(getSkipConditions, []);

  const { currenciesDataSkip, currensiesPricesSkip } = getSkipConditions();
  const { modal } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();

  const { data: currenciesData, isFetching: isFetchingData } = useGetCurrenciesDataQuery(
    { currencies: currenciesList },
    { skip: skipConditions.currenciesDataSkip },
  );
  const { data: currenciesPrice, isFetching: isFetchingPrices } = useGetCurrenciesCostsQuery(
    { currencies: currenciesList },
    { skip: skipConditions.currensiesPricesSkip },
  );

  const [currencies, setCurrencies] = useState(getInitialCurrencies);
  const [prices, setPrices] = useState(geInitialPrices);
  const [modalCurrency, setModalCurrency] = useState<CurrenciesList>(null);

  const isLoading = isFetchingData || isFetchingPrices;
  const showCards = currencies && prices;

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
      togglePageScroll(false);
    },
    [dispatch],
  );

  useEffect(() => {
    if (currenciesPrice) {
      const costs: ICosts = {
        [CurrenciesList.BYN]: currenciesPrice.data,
      };

      saveCurrenciesData(currenciesPrice, costs);
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
