import './index.scss';

import { IOption } from '@constants/types';
import { FC, MouseEvent } from 'react';

export const Option: FC<IOption> = ({ currency, onCLick }) => {
  function handlerOnClick(e: MouseEvent<HTMLLIElement>) {
    e.stopPropagation();
    onCLick(currency);
  }

  return (
    <li className='option' onClick={handlerOnClick} data-testid='modal-select-option'>
      {currency}
    </li>
  );
};
