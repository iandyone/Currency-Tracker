import './index.scss';

import { CurrenciesList } from '@constants/types';
import { setCurrentCurrency } from '@store/reducers/app-reducer';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
import { FC, useCallback, useState } from 'react';

import { Option } from '../option';

export const Select: FC = () => {
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
