import './index.scss';
import '@pages/home';

import { Header } from '@components/header';
import { useSelectorTyped } from '@utils/hooks/redux-hooks';
import { FC } from 'react';

export const App: FC = () => {
  const { theme } = useSelectorTyped((store) => store.app);

  return (
    <div className={`app ${theme}`}>
      <Header />
    </div>
  );
};
