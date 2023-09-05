import './index.scss';

import Logo from '@assets/icons/logo.webp';
import { footerData } from '@components/Footer/config';
import { LinksColumn } from '@components/Footer/LinksColumn';
import { IFooterColumn } from '@components/Footer/types';
import { FC } from 'react';

export const Footer: FC = () => {
  const { copyright, text, title } = footerData;
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
                <h3 className='footer__title'>{title}</h3>
              </div>
              <p className='footer__text'>{text}</p>
            </div>
            <div className='footer__navigation navigation'>
              {linkColumns.map((column) => (
                <LinksColumn {...column} key={column.column} />
              ))}
            </div>
          </div>
          <div className='footer_copyright'>{copyright}</div>
        </div>
      </div>
    </footer>
  );
};
