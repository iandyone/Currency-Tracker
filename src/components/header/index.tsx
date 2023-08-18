import './index.scss';

import Logo from '@assets/icons/logo.webp';
import { INavLink, IThemeButtonProps } from '@constants/types';
import { toggleAppTheme } from '@store/reducers/app-reducer';
import { useDispatchTyped, useSelectorTyped } from '@utils/hooks/redux-hooks';
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

const ThemeButton: FC<IThemeButtonProps> = ({ className }) => {
  const { theme } = useSelectorTyped((store) => store.app);
  const dispatch = useDispatchTyped();

  const classNames = {
    switcher: `theme__switcher ${theme}`,
    toggler: `theme__toggler ${theme}`,
  };

  function handlerOnClick() {
    dispatch(toggleAppTheme());
  }

  return (
    <div className={className} onClick={handlerOnClick}>
      <div className={classNames.switcher}>
        <div className={classNames.toggler}></div>
      </div>
    </div>
  );
};

export const NavLink: FC<INavLink> = ({ name, route }) => {
  return (
    <li className='header__link'>
      <Link to={route}>{name}</Link>
    </li>
  );
};
