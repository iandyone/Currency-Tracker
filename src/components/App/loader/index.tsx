import './index.scss';

import { Spinner } from '@components/loader';
import { FC, memo } from 'react';

const Loader: FC = () => {
  return (
    <div className='loader'>
      <Spinner />
    </div>
  );
};

export default memo(Loader);
