import './index.scss';

import { Banks } from '@components/banks';
import Banner from '@components/banner';
import { withSection } from '@utils/hocs/with-section';
import { FC } from 'react';

const CardPage: FC = () => {
  return (
    // <section className='card' data-testid='card-page'>
    <div className='card__container'>
      <div className='card__body'>
        <Banner />
        <Banks />
      </div>
    </div>
    // </section>
  );
};

// export default CardPage;

export default withSection(CardPage, 'card', 'card-page');

/*

 <section className={baseClassName} data-testid={testid}>
          <div className={`${baseClassName}__container container`}>
            <div className={`${baseClassName}__body`}>
              <Banner />
      <Banks />
            </div>
          </div>
        </section>
*/
