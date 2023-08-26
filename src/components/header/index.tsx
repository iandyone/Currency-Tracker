import './index.scss';

import Logo from '@assets/icons/logo.webp';
import { ThemeButton } from '@components/theme-button';
import { INavLink } from '@constants/types';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  const pagesList: INavLink[] = [
    { name: 'Home', route: '/' },
    { name: 'Timeline', route: '/timeline' },
    { name: 'Bank card', route: '/card' },
    { name: 'Contacts', route: '/contacts' },
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

const NavLink: FC<INavLink> = ({ name, route }) => {
  const linkName = name.split(' ');
  const testID = linkName[linkName.length - 1].toLowerCase() + '-route';

  return (
    <li className='header__link' data-testid={testID}>
      <Link to={route}>{name}</Link>
    </li>
  );
};
