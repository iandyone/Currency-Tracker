import './index.scss';

import Logo from '@assets/icons/logo.webp';
import BannerContent from '@components/Banner/config';
import { FC, memo } from 'react';

const Banner: FC = () => {
  const { content, title } = BannerContent;

  return (
    <div className='banner'>
      <div className='banner__container'>
        <div className='banner__body'>
          <div className='banner__content'>
            <h1 className='banner__title'>{title}</h1>
            <p className='banner__text'>{content}</p>
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
