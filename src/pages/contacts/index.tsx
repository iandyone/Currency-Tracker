import './index.scss';

import Banner from '@components/banner';
import { withSection } from '@utils/hocs/with-section';
import { FC } from 'react';

const ContactsPage: FC = () => {
  return (
    <>
      <Banner />
      <h1>Contacts page</h1>
    </>
  );
};

export default withSection(ContactsPage, 'contacts');
