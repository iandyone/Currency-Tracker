import './index.scss';

import { currencyCardData } from '@components/Currencies/CurrencyCard/config';
import { ICurrencyCardParams } from '@components/Currencies/CurrencyCard/types';
import { FC, memo } from 'react';

const CurrencyCardComponent: FC<ICurrencyCardParams> = ({
  name,
  price,
  symbol,
  index,
  onClick,
  currency,
}) => {
  const { baseCurrency } = currencyCardData;

  function handlerOnClick() {
    onClick(currency);
  }

  return (
    <div className='currencies__currency currency' onClick={handlerOnClick} data-testid='currency-card'>
      <div className={`currency__icon currency-${index}`}>{symbol}</div>
      <div className='currency__content'>
        <h4 className='currency__title'>{name}</h4>
        <p className='currency__price'>
          {baseCurrency} {price.toFixed(5)} {symbol}
        </p>
      </div>
    </div>
  );
};

export const CurrencyCard = memo(CurrencyCardComponent);
