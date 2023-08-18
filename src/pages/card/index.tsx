import './index.scss';

import { Banner } from '@components/banner';
import { FC } from 'react';

export const CardPage: FC = () => {
  return (
    <section className='card'>
      <div className='card__container container'>
        <Banner />
        <h1>Card page</h1>
      </div>
    </section>
  );
};
