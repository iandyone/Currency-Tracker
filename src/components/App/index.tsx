import './index.scss';
import '@pages/home';

import { Banner } from '@components/banner';
import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { useSelectorTyped } from '@utils/hooks/redux-hooks';
import { FC } from 'react';

export const App: FC = () => {
  const { theme } = useSelectorTyped((store) => store.app);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};
