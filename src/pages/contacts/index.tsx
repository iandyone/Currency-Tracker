import './index.scss';

import Banner from '@components/banner';
import { Contacts } from '@components/contacts';
import { withSection } from '@utils/hocs/with-section';
import { FC } from 'react';

const ContactsPage: FC = () => {
  return (
    <div className='contacts-page' data-testid='contacts-page'>
      <div className='contacts-page__container'>
        <Banner />
        <Contacts />
      </div>
    </div>
  );
};

export default withSection(ContactsPage, 'contacts', 'contacts-page');
