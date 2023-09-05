import { Banks } from '@components/Banks';
import Banner from '@components/Banner';
import { withSection } from '@utils/hocs/withSection';
import { FC } from 'react';

const BanksPage: FC = () => {
  return (
    <div className='card__container'>
      <div className='card__body'>
        <Banner />
        <Banks />
      </div>
    </div>
  );
};

export default withSection(BanksPage, 'card', 'card-page');
