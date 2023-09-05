import Banner from '@components/Banner';
import { Contacts } from '@components/Contacts';
import { withSection } from '@utils/hocs/withSection';
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
