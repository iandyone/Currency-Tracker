import './index.scss';

import { routes } from '@constants/routes';
import { useSelectorTyped } from '@hooks/reduxHooks';
import { FC, lazy, memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './Loader';

const Layout = lazy(() => import('@components/Layout'));

const App: FC = () => {
  const { theme } = useSelectorTyped((store) => store.app);

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
