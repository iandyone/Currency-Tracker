import './index.scss';

import { Spinner } from '@components/Loader';
import { Select } from '@components/Modal/Select';
import { IModalProps } from '@components/Modal/types';
import Portal from '@components/Portal';
import { CurrenciesList } from '@constants/enums';
import { ICosts, ICurrencyParams } from '@constants/types';
import { setModal } from '@store/reducers/app-reducer';
import { useGetCurrenciesCostsQuery } from '@store/reducers/currencies-api';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { FC, MouseEvent, useEffect, useState } from 'react';

export const Modal: FC<IModalProps> = ({ currency }) => {
  const { modal, currentCurrency } = useSelectorTyped((store) => store.app);
  const currenciesList = Object.keys(CurrenciesList).join(',');
  const currenciesData: ICurrencyParams = JSON.parse(localStorage.getItem('currenciesData'));
  const { name, symbol } = currenciesData.data[currency];

  const dispatch = useDispatchTyped();
  const [price, setPrice] = useState<number>(1);
  const { costsSkip } = getSkipConditions();
  const {
    data: costs,
    isFetching: isFetchingCurrency,
    isLoading: isLoadingCurrency,
  } = useGetCurrenciesCostsQuery({ currencies: currenciesList, base: currentCurrency }, { skip: costsSkip });
  const isLoading = isFetchingCurrency || isLoadingCurrency;

  function handlerOnClick() {
    dispatch(setModal(false));
  }

  function handlerOnClickContent(e: MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  function getSkipConditions() {
    const costData = getCashedCosts();

    return {
      costsSkip: Boolean(costData[currentCurrency]),
    };
  }

  function getCashedCosts() {
    return JSON.parse(localStorage.getItem('costs'));
  }

  useEffect(() => {
    if (!isLoading && costs) {
      const costsData: ICosts = getCashedCosts();

      costsData[currentCurrency] = costs.data;
      localStorage.setItem('costs', JSON.stringify(costsData));

      setPrice(costsData[currentCurrency][currency].value);
    }
  }, [costs, currency, currentCurrency, isLoading]);

  useEffect(() => {
    const costsData: ICosts = getCashedCosts();

    if (costsData[currentCurrency]) {
      setPrice(costsData[currentCurrency][currency].value);
    }
  }, [currentCurrency, currency]);

  return (
    <Portal id='modal'>
      {modal && (
        <div className='modal' onClick={handlerOnClick} data-testid='modal'>
          <div className='modal__body' onClick={handlerOnClickContent}>
            <h4 className='modal__title' data-testid='modal-title'>
              {name}
            </h4>
            {isLoading && <Spinner />}

            {!isLoading && (
              <div className='modal__course'>
                <span data-testid='modal-currency'>1 {currentCurrency} </span> =
                <span data-testid='modal-cost'>
                  {price} {symbol}
                </span>
              </div>
            )}
            <Select />
          </div>
        </div>
      )}
    </Portal>
  );
};
