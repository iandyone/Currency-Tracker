import './index.scss';

import Logo from '@assets/icons//logo.webp';
import { FC, memo } from 'react';

const Banner: FC = () => {
  return (
    <div className='banner'>
      <div className='banner__container container'>
        <div className='banner__body'>
          <div className='banner__content'>
            <h1 className='banner__title'>Modsen Currency Tracker</h1>
            <p className='banner__text'>Quotes for the dollar and other international currencies</p>
          </div>
          <div className='banner__icon'>
            <img src={Logo} alt='banner-logo' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);
