import './index.scss';

import { Spinner } from '@components/loader';
import Portal from '@components/portal';
import { CurrenciesList, ICosts, ICurrencyParams, IOption } from '@constants/types';
import { setCurrentCurrency, setModal } from '@store/reducers/app-reducer';
import { useGetCurrenciesCostsQuery } from '@store/reducers/currencies-api';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { FC, MouseEvent, useCallback, useEffect, useState } from 'react';

interface IModalProps {
  currency: keyof typeof CurrenciesList;
}

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
    const costData = JSON.parse(localStorage.getItem('costs'));

    return {
      costsSkip: Boolean(costData[currentCurrency]),
    };
  }

  useEffect(() => {
    if (!isLoading && costs) {
      const costsData: ICosts = JSON.parse(localStorage.getItem('costs'));
      costsData[currentCurrency] = costs.data;
      localStorage.setItem('costs', JSON.stringify(costsData));
      setPrice(costsData[currentCurrency][currency].value);
    }
  }, [costs, currency, currentCurrency, isLoading]);

  useEffect(() => {
    const costsData: ICosts = JSON.parse(localStorage.getItem('costs'));

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
                <span data-testid='modal-currency'>1 {currentCurrency} </span> ={' '}
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

const Select: FC = () => {
  const { currentCurrency } = useSelectorTyped((store) => store.app);
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatchTyped();
  const classNames = {
    current: getToggleClassNames('select__current'),
    menu: getToggleClassNames('select__menu'),
  };

  const handlerOnClick = useCallback(
    (currency: keyof typeof CurrenciesList) => {
      dispatch(setCurrentCurrency(currency));
      setShowOptions(false);
    },
    [dispatch],
  );

  function getToggleClassNames(className: string) {
    return `${className} ${showOptions && 'active'}`;
  }

  function handlerOnClickSelect() {
    setShowOptions(!showOptions);
  }

  return (
    <article className='select'>
      <div className={classNames.current} onClick={handlerOnClickSelect} data-testid='modal-select'>
        {currentCurrency}
      </div>
      <ul className={classNames.menu}>
        {Object.keys(CurrenciesList).map((currency) => (
          <Option key={currency} currency={currency as CurrenciesList} onCLick={handlerOnClick} />
        ))}
      </ul>
    </article>
  );
};

const Option: FC<IOption> = ({ currency, onCLick }) => {
  function handlerOnClick(e: MouseEvent<HTMLLIElement>) {
    e.stopPropagation();
    onCLick(currency);
  }

  return (
    <li className='select__option' onClick={handlerOnClick} data-testid='modal-select-option'>
      {currency}
    </li>
  );
};
