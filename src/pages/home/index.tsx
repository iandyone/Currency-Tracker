import './index.scss';

import { Banner } from '@components/banner';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <section className='home'>
      <div className='home__container container'>
        <Banner />
        <h1>Home page</h1>
      </div>
    </section>
  );
};
