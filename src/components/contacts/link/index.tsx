import { IContact } from '@constants/types';
import { FC } from 'react';

export const Link: FC = ({ contact, linkName, linkType }: IContact) => {
  const href = linkType + linkName;

  return (
    <li className='contacts__link'>
      <span>{contact}</span>
      {linkName && <a href={href}>: {linkName}</a>}
    </li>
  );
};
