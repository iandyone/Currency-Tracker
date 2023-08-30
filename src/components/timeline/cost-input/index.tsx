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
    const { id } = this.props;

    return (
      <div className='cost'>
        <h4 className='cost__title'>Day {id}: </h4>
        <input
          type='number'
          className='cost__input'
          value={this.state.value}
          onChange={this.handlerOnChange}
          placeholder={`Day ${id}`}
          data-testid='timeline-input'
        />
      </div>
    );
  }
}
