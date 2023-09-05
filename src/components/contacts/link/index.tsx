import { IContact } from '@appTypes/index';
import { FC, memo } from 'react';

const LinkComponent: FC = ({ contact, linkName, linkType }: IContact) => {
  const href = linkType ? linkType + linkName : linkName;

  return (
    <li className='contacts__link'>
      <span>{contact}</span>
      {linkName && <a href={href}>: {linkName}</a>}
    </li>
  );
};

export const Link = memo(LinkComponent);
