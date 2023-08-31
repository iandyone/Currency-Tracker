import './index.scss';

import { INavLink } from '@constants/types';
import { FC } from 'react';
import { NavLink as Link } from 'react-router-dom';

export const NavLink: FC<INavLink> = ({ name, route }) => {
  const linkName = name.split(' ');
  const testID = linkName[linkName.length - 1].toLowerCase() + '-route';

  return (
    <li className='header__link' data-testid={testID}>
      <Link to={route}>{name}</Link>
    </li>
  );
};
