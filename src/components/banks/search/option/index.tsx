import './index.scss';

import { IOptionProps } from '@components/Banks/Search/Option/types';
import { MouseEvent, PureComponent } from 'react';

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
