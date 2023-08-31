import './index.scss';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default memo(Layout);
