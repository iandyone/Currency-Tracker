import './index.scss';

import Banner from '@components/banner';
import { withSection } from '@utils/hocs/with-section';
import { FC } from 'react';

const CardPage: FC = () => {
  return (
    <>
      <Banner />
      <h1>Card page</h1>
    </>
  );
};

export default withSection(CardPage, 'card', 'card-page');
