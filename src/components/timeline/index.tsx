import './index.scss';

import Portal from '@components/Portal';
import { CostInput } from '@components/Timeline/CostInput';
import { Diagram } from '@components/Timeline/Diagram';
import { Select } from '@components/Timeline/Select';
import UpdateTime from '@components/Update-time';
import { ICurrencyGraphState } from '@constants/types';
import { RootState, store } from '@store/index';
import { resetDiagramData, setDiagramData } from '@store/reducers/diagram-reducer';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Component } from 'react';
import { connect } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ITimelineProps {
  showDiagramModal: boolean;
}

const dispatch = store.dispatch;

class TimelineComponent extends Component<ITimelineProps, ICurrencyGraphState> {
  private defaultOption = 'Choose the currency';

  constructor(props: ITimelineProps) {
    super(props);
    this.state = {
      showGraph: false,
      option: this.defaultOption,
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
    const costs = Object.assign({}, store.getState().diagram.diagramData);

    if (!value) {
      delete costs[id];
      dispatch(setDiagramData(costs));
      return;
    }

    costs[id] = value;
    dispatch(setDiagramData(costs));
  };

  setOption(option: string) {
    this.setState((prevState) => ({ ...prevState, option }));
  }

  render() {
    const { diagramData, requiredValues } = store.getState().diagram;
    const { option, showGraph } = this.state;
    const { showDiagramModal } = this.props;
    const inputItems = new Array(requiredValues).fill(1);
    const showGraphButton = showDiagramModal && !showGraph;
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

            {showGraphButton && (
              <Portal id='diagram-modal'>
                <div className={`diagram-modal ${showGraphButton && 'active'}`}>
                  The currency diagram was created!
                </div>
              </Portal>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  const { diagramData, requiredValues } = state.diagram;

  return {
    showDiagramModal: Object.keys(diagramData).length === requiredValues,
  };
};

export const Timeline = connect(mapStateToProps)(TimelineComponent);
