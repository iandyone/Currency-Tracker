import './index.scss';

import Portal from '@components/Portal';
import { modalData } from '@components/Timeline/Modal/config';
import { PureComponent } from 'react';

interface IModalProps {
  showGraphButton: boolean;
}

export class Modal extends PureComponent<IModalProps, object> {
  render() {
    const { showGraphButton } = this.props;
    const { text } = modalData;

    return (
      <Portal id='diagram-modal'>
        <div className={`diagram-modal ${showGraphButton && 'active'}`}>{text}</div>
      </Portal>
    );
  }
}
