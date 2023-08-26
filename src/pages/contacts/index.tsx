import './index.scss';

import FacebookIcon from '@assets/icons/facebook.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import LinkedinIcon from '@assets/icons/linkedin.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import Banner from '@components/banner';
import { IContact, IMedia } from '@constants/types';
import { withSection } from '@utils/hocs/with-section';
import { FC } from 'react';

const ContactsPage: FC = () => {
  return (
    <div className='contacts-page' data-testid='contacts-page'>
      <Banner />
      <Contacts />
    </div>
  );
};

export const Contacts: FC = () => {
  const contacts: IContact[] = [
    { contact: 'Email', linkName: 'contact@modsen-sowtware.com', linkType: 'mailto:' },
    { contact: 'Phone', linkName: '+48501157180', linkType: 'tel:' },
    { contact: 'Stefana Okrzei 1a/10' },
    { contact: 'Warsaw, Poland' },
  ];

  const media: IMedia[] = [
    { name: 'twitter', link: 'https://www.modsen-software.com', icon: TwitterIcon },
    { name: 'instagram', link: 'https://www.modsen-software.com', icon: InstagramIcon },
    { name: 'favebook', link: 'https://www.modsen-software.com', icon: FacebookIcon },
    { name: 'linkedin', link: 'https://www.modsen-software.com', icon: LinkedinIcon },
  ];

  return (
    <div className='contacts'>
      <h1 className='contacts__title'>Contact Us:</h1>
      <div className='contacts__content'>
        <ul className='contacts__column'>
          {contacts.map((link) => (
            <Link {...link} key={link.contact} />
          ))}
        </ul>
        <div className='contacts__column'>
          {media.map(({ icon: Element, link, name }) => (
            <a href={link} target='_blank' className='contacts__media' rel='noreferrer' key={name}>
              <Element fill='var(--green)' />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Link: FC = ({ contact, linkName, linkType }: IContact) => {
  const href = linkType + linkName;

  return (
    <li className='contacts__link'>
      <span>{contact}</span>
      {linkName && <a href={href}>: {linkName}</a>}
    </li>
  );
};

export default withSection(ContactsPage, 'contacts', 'contacts-page');
