import React, { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  id: string;
}

const Portal: React.FC<PortalProps> = ({ children, id = 'Portal' }) => {
  const container = document.createElement('div');
  container.setAttribute('id', id);

  useEffect(() => {
    document.querySelector('.app').appendChild(container);
    return () => {
      document.querySelector('.app').removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

export default Portal;
