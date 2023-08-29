import './index.scss';

import { Diagram } from '@components/diagram';
import { UpdateTime } from '@components/update-time';
import { ICurrencyGraphState } from '@constants/types';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Component } from 'react';

import { CostInput } from './cost-input';
import { Select } from './select';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export class Timeline extends Component<object, ICurrencyGraphState> {
  private defaultOption = 'Choose the currency';

  constructor(props: object) {
    super(props);
    this.state = { showGraphButton: false, showGraph: false, costs: {}, requiredValues: 30, option: this.defaultOption };
  }

  showGrapgButton = () => {
    this.setState((prevState) => ({ ...prevState, showGraphButton: true }));
  };

  showGraph = () => {
    this.setState({ showGraphButton: false, showGraph: true });
  };

  showGraphButton = () => {
    this.setState((prevState) => ({ ...prevState, showGraphButton: true }));
  };

  resetState = (option: string) => {
    this.setState((prevState) => ({ ...prevState, showGraphButton: false, showGraph: false, option }));
  };

  setCost = (id: number, value: number) => {
    const costs = this.state.costs;

    if (!value) {
      delete costs[id];
      this.setState((prevState) => ({ ...prevState, costs, showGraphButton: false }));
      return;
    }

    costs[id] = value;
    this.setState((prevState) => ({ ...prevState, costs }));

    if (Object.keys(costs).length === this.state.requiredValues) {
      this.showGraphButton();
    }
  };

  setOption(option: string) {
    this.setState((prevState) => ({ ...prevState, option }));
  }

  render() {
    return (
      <div className='timeline' data-testid='timeline'>
        <div className='timeline__container container'>
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
              <button className='cost__button' onClick={this.showGraph} data-testid='timeline-button'>
                Show graph
              </button>
            )}

            {this.state.showGraph && <Diagram costs={this.state.costs} period={this.state.requiredValues} currency={this.state.option} />}
          </div>
        </div>
      </div>
    );
  }
}
