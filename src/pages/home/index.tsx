import './index.scss';

import Banner from '@components/banner';
import { Currencies } from '@components/currencies';
import { withSection } from '@utils/hocs/with-section';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <>
      <Banner />
      <Currencies />
    </>
  );
};

export default withSection(HomePage, 'home', 'home-page');
