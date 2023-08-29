import './index.scss';

import { Map } from '@components/banks/map';
import { UpdateTime } from '@components/update-time';
import { Component } from 'react';

import { Search } from './search';

interface IBanksState {
  currency: string;
}

export class Banks extends Component<object, IBanksState> {
  constructor(props: object) {
    super(props);
    this.state = { currency: '' };
  }

  handlerOnClickOption = (name: string) => {
    this.setState({ currency: name });
  };

  render() {
    const { currency } = this.state;

    return (
      <div className='banks'>
        <UpdateTime />
        <h1 className='banks__title'>Search currency in the bank</h1>
        <Search className='banks__input' handlerOnClick={this.handlerOnClickOption} />
        <Map currency={currency} />
      </div>
    );
  }
}
