import './index.scss';

import { ICostInputProps, ICostInputState } from '@constants/types';
import { ChangeEvent, Component } from 'react';

export class CostInput extends Component<ICostInputProps, ICostInputState> {
  constructor(props: ICostInputProps) {
    super(props);
    this.state = { value: '', error: null };
  }

  handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 5) return;

    const cost = Number.parseFloat(value);
    const maxCostValue = 30;

    const isValueWrong = !cost || Math.abs(cost) > maxCostValue;
    const error = isValueWrong ? 'Wrong value' : null;

    this.setState({ value, error: error });
    this.props.setCost(this.props.id, error ? 0 : cost);
  };

  render() {
    const { id } = this.props;
    const { error } = this.state;

    return (
      <div className='cost'>
        <h4 className={`cost__title ${error && 'active'}`}>{error ? error : `Day ${id}: `}</h4>
        <input
          type='number'
          className={`cost__input ${error && 'active'}`}
          value={this.state.value}
          onChange={this.handlerOnChange}
          placeholder={'cost'}
          data-testid='timeline-input'
        />
      </div>
    );
  }
}
