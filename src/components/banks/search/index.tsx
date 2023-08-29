import './index.scss';

import { CurrenciesList, handlerWithStringProps } from '@constants/types';
import { ChangeEvent, PureComponent } from 'react';

import { Option } from './option';

interface ISearchProps {
  className: string;
  handlerOnClick: handlerWithStringProps;
}

interface ISearchState {
  value: string;
  searchResult: string[];
  showOptions: boolean;
}

export class Search extends PureComponent<ISearchProps, ISearchState> {
  private currencies = Object.keys(CurrenciesList);

  constructor(props: ISearchProps) {
    super(props);
    this.state = { value: '', searchResult: [], showOptions: false };
  }

  handlerOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    const shouldOptionsBeVisible = Boolean(value.length);
    const results = this.currencies.filter((currency) => currency.toLowerCase().includes(value));

    this.setState((prevState) => ({ ...prevState, value: e.target.value, searchResult: results, showOptions: shouldOptionsBeVisible }));
  };

  handlerOnClickOption = (currency: string) => {
    this.setState((prevState) => ({ ...prevState, showOptions: false, value: currency }));
    this.props.handlerOnClick(currency);
  };

  handlerOnClickOptions = () => {
    this.setState((prevState) => ({ ...prevState, showOptions: true }));
  };

  render() {
    const { searchResult, value, showOptions } = this.state;

    return (
      <div className={this.props.className + ' search'}>
        <input className='search__input' value={value} onChange={this.handlerOnChange} type='text' placeholder='Сurrency search...' />
        {showOptions && (
          <ul className='search__options' onClick={this.handlerOnClickOptions}>
            {searchResult.map((currency) => (
              <Option key={currency} currency={currency} handler={this.handlerOnClickOption} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
