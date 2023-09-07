import './index.scss';

import { ICurrencyParams } from '@appTypes/index';
import { ISelectProps, ISelectState } from '@components/Timeline/Select/types';
import { CurrenciesList } from '@constants/enums';
import { diagramObserver } from '@observers/diagram';
import { PureComponent } from 'react';

export class Select extends PureComponent<ISelectProps, ISelectState> {
  constructor(props: ISelectProps) {
    super(props);
    this.state = { currencies: [], showMenu: false };
  }

  componentDidMount() {
    const currenciesData: ICurrencyParams =
      JSON.parse(localStorage.getItem('currenciesData')) ?? this.props.data;

    if (currenciesData) {
      const currencies = Object.keys(CurrenciesList).map((item) => currenciesData.data[item].name);
      this.setState((state) => ({ ...state, currencies }));
    }
  }

  handlerOnClickTitle = () => {
    this.setState((state) => ({ ...state, showMenu: !state.showMenu }));
  };

  handlerOnClickOption = (name: string) => () => {
    this.setState((state) => ({ ...state, showMenu: false }));
    this.props.handlerOnClick(name);
    diagramObserver.notify(false);
  };

  render() {
    const { currencies, showMenu } = this.state;

    return (
      <>
        <div className='current' data-testid='timeline-select' /* onClick={this.handlerOnClickTitle} */>
          <div
            className={`current__title ${showMenu && 'active'}`}
            data-testid='timeline-currency'
            onClick={this.handlerOnClickTitle}>
            {this.props.option}
          </div>
          <ul className='current__options'>
            {showMenu &&
              currencies.map((option) => (
                <li
                  className='current__option'
                  onClick={this.handlerOnClickOption(option)}
                  key={option}
                  data-testid='timeline-select-option'>
                  {option}
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
}
