import './index.scss';

import { IFooterColumn } from '@components/Footer/types';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

export const LinksColumn: FC<IFooterColumn> = ({ column, links }) => {
  const [isActive, setIsActive] = useState(false);
  const containerClassNames = `navigation__column ${isActive ? 'active' : ''}`;

  function handlerOnClick() {
    setIsActive(!isActive);
  }

  return (
    <div className={containerClassNames} onClick={handlerOnClick}>
      <h3 className='navigation__title'>{column}</h3>
      <ul className='navigation__links'>
        {links.map(({ name, route }) => {
          return (
            <li className='navigation__link' key={name}>
              <Link to={route}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
