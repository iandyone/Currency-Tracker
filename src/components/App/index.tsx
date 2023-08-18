import './index.scss';
import '@pages/home';

import { Layout } from '@components/layout';
import { CardPage } from '@pages/card';
import { ContactsPage } from '@pages/contacts';
import { ErrorPage } from '@pages/error';
import { HomePage } from '@pages/home';
import { TimelinePage } from '@pages/timeline';
import { useSelectorTyped } from '@utils/hooks/redux-hooks';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

export const App: FC = () => {
  const { theme } = useSelectorTyped((store) => store.app);

  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='timeline' element={<TimelinePage />} />
          <Route path='card' element={<CardPage />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};
