import './index.scss';

import { Option } from '@components/Banks/Search/Option';
import { ISearchProps, ISearchState } from '@components/Banks/Search/types';
import { CurrenciesList } from '@constants/enums';
import { ChangeEvent, PureComponent } from 'react';

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

    this.setState({
      value: e.target.value,
      searchResult: results,
      showOptions: results.length ? shouldOptionsBeVisible : false,
    });
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
        <input
          className='search__input'
          value={value}
          onChange={this.handlerOnChange}
          type='text'
          placeholder='Сurrency search...'
        />
        {showOptions && (
          <ul className='search__options'>
            {searchResult.map((currency) => (
              <Option key={currency} currency={currency} handler={this.handlerOnClickOption} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
