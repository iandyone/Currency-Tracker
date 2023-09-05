import './index.scss';

import { ICurrencyGraphState } from '@appTypes/index';
import { CostInput } from '@components/Timeline/CostInput';
import { Diagram } from '@components/Timeline/Diagram';
import { Modal } from '@components/Timeline/Modal';
import { Select } from '@components/Timeline/Select';
import { UpdateTime } from '@components/UpdateTime';
import { diagramObserver } from '@observers/diagram';
import { store } from '@store/index';
import { resetDiagramData, setDiagramData } from '@store/reducers/diagramReducer';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Component } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dispatch = store.dispatch;

export class Timeline extends Component<object, ICurrencyGraphState> {
  private defaultOption = 'Choose the currency';

  constructor(props: object) {
    super(props);
    this.state = {
      option: this.defaultOption,
      showGraph: false,
      isDiagramCreated: false,
    };
  }

  showGraph = () => {
    this.setState({ showGraph: true });
  };

  showGraphButton = () => {
    this.setState((prevState) => ({ ...prevState, showGraphButton: true }));
  };

  resetState = (option: string) => {
    this.setState((prevState) => ({
      ...prevState,
      showGraph: false,
      option,
    }));

    dispatch(resetDiagramData());
  };

  setCost = (id: number, value: number) => {
    const { diagramData, requiredValues } = store.getState().diagram;
    const costs = Object.assign({}, diagramData);

    if (!value) {
      delete costs[id];
      dispatch(setDiagramData(costs));
      diagramObserver.notify(false);
      return;
    }

    costs[id] = value;
    dispatch(setDiagramData(costs));

    const isDiagram = Object.keys(costs).length === requiredValues;
    diagramObserver.notify(isDiagram);
  };

  setOption(option: string) {
    this.setState((prevState) => ({ ...prevState, option }));
  }

  checkDiagram = (isDiagramCreated: boolean) => {
    this.setState((prevState) => ({ ...prevState, isDiagramCreated: isDiagramCreated }));
  };

  componentDidMount() {
    diagramObserver.subscribe(this.checkDiagram);
  }

  componentWillUnmount() {
    diagramObserver.unsubscribe(this.checkDiagram);
  }

  render() {
    const { diagramData, requiredValues } = store.getState().diagram;
    const { option, showGraph, isDiagramCreated } = this.state;
    const inputItems = new Array(requiredValues).fill(1);
    const showGraphButton = isDiagramCreated && !showGraph;
    const showInputs = option !== this.defaultOption && !showGraph;

    return (
      <div className='timeline' data-testid='timeline'>
        <div className='timeline__container container'>
          <UpdateTime />
          <div className='graph'>
            <Select handlerOnClick={this.resetState} option={option} />
            <div className='cost__body'>
              {showInputs && (
                <div className='cost__content'>
                  {inputItems.map((_, index) => (
                    <CostInput id={index + 1} key={index} setCost={this.setCost} />
                  ))}
                </div>
              )}
            </div>

            {showGraphButton && (
              <button className='cost__button' onClick={this.showGraph} data-testid='timeline-button'>
                Show diagram
              </button>
            )}

            {showGraph && <Diagram costs={diagramData} period={requiredValues} currency={option} />}

            {showGraphButton && <Modal showGraphButton />}
          </div>
        </div>
      </div>
    );
  }
}
