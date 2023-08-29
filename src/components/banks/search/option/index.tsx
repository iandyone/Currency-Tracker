import './index.scss';

import { handlerWithStringProps } from '@constants/types';
import { MouseEvent, PureComponent } from 'react';

interface IOptionProps {
  currency: string;
  handler: handlerWithStringProps;
}

export class Option extends PureComponent<IOptionProps, object> {
  constructor(props: IOptionProps) {
    super(props);
  }

  handlerOnClick = (e: MouseEvent<HTMLLIElement>) => {
    const { currency, handler } = this.props;

    e.stopPropagation();
    handler(currency);
  };

  render() {
    const { currency } = this.props;

    return (
      <li className='search__option option' onClick={this.handlerOnClick}>
        {currency}
      </li>
    );
  }
}
