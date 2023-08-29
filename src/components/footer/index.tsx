import './index.scss';

import Logo from '@assets/icons/logo.webp';
import { IFooterColumn } from '@constants/types';
import { FC } from 'react';

import { LinksColumn } from './links-column';

export const Footer: FC = () => {
  const linkColumns: IFooterColumn[] = [
    {
      column: 'Home',
      links: [
        { name: 'Makret', route: '/' },
        { name: 'Service', route: '/' },
      ],
    },
    {
      column: 'Product',
      links: [
        { name: 'Sparks', route: '/' },
        { name: 'Snaps', route: '/' },
      ],
    },
    {
      column: 'Community',
      links: [
        { name: 'Ideas', route: '/' },
        { name: 'Streams', route: '/' },
      ],
    },
  ];

  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__body'>
          <div className='footer__content'>
            <div className='footer__info'>
              <div className='footer__heading'>
                <img src={Logo} alt='heading-logo' />
                <h3 className='footer__title'>Modsen Currency Tracker</h3>
              </div>
              <p className='footer__text'>
                Since then, the company has grown organically to. Starsup is the world&apos;s largest trading platform, with $12 billion worth of
                currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.
              </p>
            </div>
            <div className='footer__navigation navigation'>
              {linkColumns.map((column) => (
                <LinksColumn {...column} key={column.column} />
              ))}
            </div>
          </div>
          <div className='footer_copyright'>Modsen © 2023-2024, All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};
