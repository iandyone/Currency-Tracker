import './index.scss';

import { Banks } from '@components/banks';
import Banner from '@components/banner';
import { withSection } from '@utils/hocs/with-section';
import { FC } from 'react';

const CardPage: FC = () => {
  return (
    <div className='card__container'>
      <div className='card__body'>
        <Banner />
        <Banks />
      </div>
    </div>
  );
};

export default withSection(CardPage, 'card', 'card-page');
