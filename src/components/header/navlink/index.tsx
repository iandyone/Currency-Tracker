import './index.scss';

import { INavLink } from '@appTypes/index';
import { FC } from 'react';
import { NavLink as Link } from 'react-router-dom';

export const NavLink: FC<INavLink> = ({ name, route }) => {
  const linkName = name.split(' ');
  const testID = linkName[linkName.length - 1].toLowerCase() + '-route';

  return (
    <li className='header__link'>
      <Link to={route} data-testid={testID}>
        {name}
      </Link>
    </li>
  );
};
