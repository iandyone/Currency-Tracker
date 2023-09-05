import './index.scss';

import { INavLink } from '@appTypes/index';
import Logo from '@assets/icons/logo.webp';
import { NavLink } from '@components/Header/Navlink';
import { ThemeButton } from '@components/ThemeButton';
import { Routes } from '@constants/enums';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  const pagesList: INavLink[] = [
    { name: 'Home', route: Routes.MAIN },
    { name: 'Timeline', route: Routes.TIMELINE },
    { name: 'Bank card', route: Routes.BANKS },
    { name: 'Contacts', route: Routes.CONTACTS },
  ];

  return (
    <header className='header'>
      <div className='header__container container'>
        <nav className='header__navigation'>
          <Link to='/' className='header__logo'>
            <img src={Logo} alt='header-logo' />
          </Link>
          <ul className='header__links'>
            {pagesList.map((pageLink) => (
              <NavLink {...pageLink} key={pageLink.name} />
            ))}
          </ul>
          <ThemeButton className='header__button' />
        </nav>
      </div>
    </header>
  );
};
