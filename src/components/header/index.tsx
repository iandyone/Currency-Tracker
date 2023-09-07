import './index.scss';

import Logo from '@assets/icons/logo.webp';
import { NavLink } from '@components/Header/Navlink';
import { ThemeButton } from '@components/ThemeButton';
import { pagesList } from '@constants/routes';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent: FC = () => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <nav className='header__navigation'>
          <Link to='/' className='header__logo'>
            <img src={Logo} alt='header-logo' />
          </Link>
          ``
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

export const Header = memo(HeaderComponent);
