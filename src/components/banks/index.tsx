import './index.scss';

import { banksData } from '@components/Banks/config';
import { Map } from '@components/Banks/Map';
import { Search } from '@components/Banks/Search';
import { IBanksState } from '@components/Banks/types';
import { UpdateTime } from '@components/UpdateTime';
import { Component } from 'react';

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
    const { title } = banksData;

    return (
      <div className='banks'>
        <UpdateTime />
        <h1 className='banks__title'>{title}</h1>
        <Search className='banks__input' handlerOnClick={this.handlerOnClickOption} />
        <Map currency={currency} />F
      </div>
    );
  }
}
