import './index.scss';

import { Option } from '@components/Currencies/Modal/Option';
import { CurrenciesList } from '@constants/enums';
import { useDispatchTyped, useSelectorTyped } from '@hooks/reduxHooks';
import { setCurrentCurrency } from '@store/reducers/appReducer';
import { FC, useCallback, useState } from 'react';

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
