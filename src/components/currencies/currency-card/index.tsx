import './index.scss';

import { handlerWithStringProps } from '@constants/types';
import { FC } from 'react';

export interface ICurrencyCardParams {
  price: number;
  name: string;
  symbol: string;
  index: number;
  currency: string;
  onClick: handlerWithStringProps;
}

export const CurrencyCard: FC<ICurrencyCardParams> = ({ name, price, symbol, index, onClick, currency }) => {
  function handlerOnClick() {
    onClick(currency);
  }

  return (
    <div className='currencies__currency currency' onClick={handlerOnClick} data-testid='currency-card'>
      <div className={`currency__icon currency-${index}`}>{symbol}</div>
      <div className='currency__content'>
        <h4 className='currency__title'>{name}</h4>
        <p className='currency__price'>
          1 BYN = {price.toFixed(5)} {symbol}
        </p>
      </div>
    </div>
  );
};
