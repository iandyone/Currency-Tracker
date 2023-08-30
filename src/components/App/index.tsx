import './index.scss';

import { useSelectorTyped } from '@utils/hooks/redux-hooks';
import { FC, lazy, memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './loader';

const Layout = lazy(() => import('@components/layout'));
const CardPage = lazy(() => import('@pages/card'));
const ContactsPage = lazy(() => import('@pages/contacts'));
const ErrorPage = lazy(() => import('@pages/error'));
const HomePage = lazy(() => import('@pages/home'));
const TimelinePage = lazy(() => import('@pages/timeline'));

const App: FC = () => {
  const { theme } = useSelectorTyped((store) => store.app);
  const routes = [
    { path: '/', element: HomePage, index: true },
    { path: '/timeline', element: TimelinePage, index: false },
    { path: '/card', element: CardPage, index: false },
    { path: '/contacts', element: ContactsPage, index: false },
    { path: '*', element: ErrorPage, index: false },
  ];

  return (
    <div className={`app ${theme}`} data-testid='app'>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            {routes.map(({ element: Element, index, path }) => {
              return <Route index={index} path={path} element={<Element />} key={path} />;
            })}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default memo(App);
