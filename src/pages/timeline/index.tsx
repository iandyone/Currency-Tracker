import './index.scss';

import { Banner } from '@components/banner';
import { FC } from 'react';

export const TimelinePage: FC = () => {
  return (
    <section className='timeline'>
      <div className='timeline__container container'>
        <Banner />
        <h1>Timeline page</h1>
      </div>
    </section>
  );
};
