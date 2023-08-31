import './index.scss';

import { Spinner } from '@components/Loader';
import { FC, memo } from 'react';

const Loader: FC = () => {
  return (
    <div className='loader'>
      <Spinner />
    </div>
  );
};

export default memo(Loader);
