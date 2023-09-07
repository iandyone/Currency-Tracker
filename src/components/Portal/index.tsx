import React, { memo, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  id: string;
}

const Portal: React.FC<PortalProps> = ({ children, id = 'Portal' }) => {
  const [container] = useState<HTMLElement>(getInitialState);

  function getInitialState() {
    const container = document.createElement('div');
    container.setAttribute('id', id);

    return container;
  }

  useEffect(() => {
    const appElement = document.querySelector('.app');
    appElement.appendChild(container);

    return () => {
      appElement.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

export default memo(Portal);
