import './index.scss';

import { IContact, IMedia } from '@appTypes/index';
import FacebookIcon from '@assets/icons/facebook.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import LinkedinIcon from '@assets/icons/linkedin.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import { Link } from '@components/Contacts/Link';
import { FC } from 'react';

export const Contacts: FC = () => {
  const contacts: IContact[] = [
    { contact: 'Email', linkName: 'contact@modsen-sof tware.com', linkType: 'mailto:' },
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
      <div className='contacts__container container'>
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
    </div>
  );
};
