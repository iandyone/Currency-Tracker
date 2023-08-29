import './index.scss';

import { CurrenciesList, ICurrencyParams, ISelectProps, ISelectState } from '@constants/types';
import { PureComponent } from 'react';

export class Select extends PureComponent<ISelectProps, ISelectState> {
  constructor(props: ISelectProps) {
    super(props);
    this.state = { currencies: [], showMenu: false };
  }

  componentDidMount(): void {
    const currenciesData: ICurrencyParams = JSON.parse(localStorage.getItem('currenciesData'));
    const currencies = Object.keys(CurrenciesList).map((item) => currenciesData.data[item].name);

    this.setState((state) => ({ ...state, currencies }));
  }

  handlerOnClickTitle = () => {
    this.setState((state) => ({ ...state, showMenu: !state.showMenu }));
  };

  handlerOnClickOption = (name: string) => () => {
    this.setState((state) => ({ ...state, showMenu: false, option: name }));
    this.props.handlerOnClick(name);
  };

  render() {
    return (
      <>
        <div className='current' data-testid='timeline-select'>
          <div
            className={`current__title ${this.state.showMenu && 'active'}`}
            onClick={this.handlerOnClickTitle}
            data-testid='timeline-currency'>
            {this.props.option}
          </div>
          <ul className='current__options'>
            {this.state.showMenu &&
              this.state.currencies.map((option) => (
                <li className='current__option' onClick={this.handlerOnClickOption(option)} key={option} data-testid='timeline-select-option'>
                  {option}
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
}
