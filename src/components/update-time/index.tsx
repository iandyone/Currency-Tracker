import './index.scss';

import { FC, memo, useState } from 'react';

const UpdateTime: FC = () => {
  const [updateTime] = useState(getUpdateTime);

  function getUpdateTime() {
    const date = new Date(Date.now());
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }

  return (
    <div className='time'>
      Last updated at {updateTime}
      {new Date().getHours() > 12 ? 'pm' : 'am'}
    </div>
  );
};

export default memo(UpdateTime);
