import './index.scss';

import { Banner } from '@components/banner';
import { FC } from 'react';

export const ContactsPage: FC = () => {
  return (
    <section className='contacts'>
      <div className='contacts__container container'>
        <Banner />
        <h1>Contacts page</h1>
      </div>
    </section>
  );
};
