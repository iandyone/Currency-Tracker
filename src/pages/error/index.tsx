import './index.scss';

import { withSection } from '@utils/hocs/with-section';
import { FC } from 'react';

const ErrorPage: FC = () => {
  return (
    <>
      <h1>Error page</h1>
    </>
  );
};

export default withSection(ErrorPage, 'error');
