import Banner from '@components/Banner';
import { Currencies } from '@components/Currencies';
import { withSection } from '@utils/hocs/withSection';
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
