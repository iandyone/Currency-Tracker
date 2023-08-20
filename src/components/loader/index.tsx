import './index.scss';

import { FC, memo } from 'react';

const Loader: FC = () => {
  return <div className='spinner' />;
};

export const Spinner = memo(Loader);
