import './index.scss';

import { ICostInputProps, ICostInputState } from '@constants/types';
import { ChangeEvent, Component } from 'react';

export class CostInput extends Component<ICostInputProps, ICostInputState> {
  constructor(props: ICostInputProps) {
    super(props);
    this.state = { value: '' };
  }

  handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
    this.props.setCost(this.props.id, Number(e.target.value));
  };

  render() {
    const placeholder = `Day ${this.props.id}`;

    return (
      <div className='cost'>
        <h4 className='cost__title'>Day {this.props.id}: </h4>
        <input
          type='number'
          className='cost__input'
          value={this.state.value}
          onChange={this.handlerOnChange}
          placeholder={placeholder}
          data-testid='timeline-input'
        />
      </div>
    );
  }
}
