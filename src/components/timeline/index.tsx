import './index.scss';

import { Graph } from '@components/graph';
import { UpdateTime } from '@components/update-time';
import {
  CurrenciesList,
  ICostInputProps,
  ICostInputState,
  ICurrencyGraphState,
  ICurrencyParams,
  ISelectProps,
  ISelectState,
} from '@constants/types';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { ChangeEvent, Component, PureComponent } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export class Timeline extends Component<object, ICurrencyGraphState> {
  private defaultOption = 'Choose the currency';

  constructor(props: object) {
    super(props);
    this.state = { showGraphButton: false, showGraph: false, costs: {}, requiredValues: 30, option: this.defaultOption };
  }

  showGrapgButton = () => {
    this.setState((state) => ({ ...state, showGraphButton: true }));
  };

  showGraph = () => {
    this.setState({ showGraphButton: false, showGraph: true });
  };

  showGraphButton = () => {
    this.setState((state) => ({ ...state, showGraphButton: true }));
  };

  resetState = (option: string) => {
    this.setState((state) => ({ ...state, showGraphButton: false, showGraph: false, option }));
  };

  setCost = (id: number, value: number) => {
    const costs = this.state.costs;

    if (!value) {
      delete costs[id];
      this.setState((state) => ({ ...state, costs, showGraphButton: false }));
      return;
    }

    costs[id] = value;
    this.setState((state) => ({ ...state, costs }));

    if (Object.keys(costs).length === this.state.requiredValues) {
      this.showGraphButton();
    }
  };

  setOption(option: string) {
    this.setState((state) => ({ ...state, option }));
  }

  render() {
    return (
      <div className='timeline'>
        <UpdateTime />
        <div className='graph'>
          <Select handlerOnClick={this.resetState} option={this.state.option} />
          <div className='cost__body'>
            {this.state.option !== this.defaultOption && !this.state.showGraph && (
              <div className='cost__content'>
                {new Array(this.state.requiredValues).fill(1).map((_, index) => (
                  <CostInput id={index + 1} key={index} setCost={this.setCost} />
                ))}
              </div>
            )}
          </div>

          {this.state.showGraphButton && (
            <button className='cost__button' onClick={this.showGraph}>
              Show graph
            </button>
          )}

          {this.state.showGraph && <Graph costs={this.state.costs} period={this.state.requiredValues} currency={this.state.option} />}
        </div>
      </div>
    );
  }
}

class Select extends PureComponent<ISelectProps, ISelectState> {
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
        <div className='current'>
          <div className={`current__title ${this.state.showMenu && 'active'}`} onClick={this.handlerOnClickTitle}>
            {this.props.option}
          </div>
          <ul className='current__options'>
            {this.state.showMenu &&
              this.state.currencies.map((option) => (
                <li className='current__option' onClick={this.handlerOnClickOption(option)} key={option}>
                  {option}
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
}

class CostInput extends Component<ICostInputProps, ICostInputState> {
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
        <input type='number' className='cost__input' value={this.state.value} onChange={this.handlerOnChange} placeholder={placeholder} />
      </div>
    );
  }
}
