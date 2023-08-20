import './index.scss';

import Banner from '@components/banner';
import { withSection } from '@utils/hocs/with-section';
import { FC } from 'react';

const CardPage: FC = () => {
  return (
    <div className='card__content'>
      <Banner />
      <h1>Card page</h1>
    </div>
  );
};

export default withSection(CardPage, 'card');
