import { IGraphProps } from '@components/Timeline/Diagram/types';
import { rootState } from '@store/index';
import { getDiagramColors } from '@utils/helpers/getDiagramColors';
import { transformArrayToDiagramData } from '@utils/helpers/transformArrayToDiagramData';
import {
  Align,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { PureComponent } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

class DiagramComponent extends PureComponent<IGraphProps, object> {
  private values: number[] = Object.values(this.props.costs);
  private days: string[] = new Array(this.props.period).fill(0).map((_, index) => String(`Day ${index + 1}`));
  private costs = transformArrayToDiagramData(this.values);
  private defaultColors = getDiagramColors(this.props.theme);
  private gridColors = () => (this.props.theme === 'dark' ? '#ffffff1a' : '#898989');

  constructor(props: IGraphProps) {
    super(props);
  }

  componentDidUpdate() {
    const scaleColor = getDiagramColors(this.props.theme);
    this.options.scales.x.title.color = scaleColor;
    this.options.scales.y.title.color = scaleColor;
    this.options.scales.x.border.color = scaleColor;
    this.options.scales.y.border.color = scaleColor;
  }

  options = {
    responsive: true,
    scales: {
      x: {
        min: 0,
        max: this.props.period,
        title: {
          display: true,
          text: 'DAY',
          color: this.defaultColors,
          padding: 5,
          align: 'end' as Align,
        },
        ticks: {
          display: false,
        },
        border: {
          color: this.defaultColors,
        },
        grid: {
          display: true,
          color: this.gridColors,
        },
      },
      y: {
        max: 31,
        min: -31,
        title: {
          display: true,
          text: 'VALUE',
          color: this.defaultColors,
          padding: 5,
          align: 'end' as Align,
        },
        ticks: {
          display: false,
        },
        border: {
          color: this.defaultColors,
        },
        grid: {
          display: true,
          color: this.gridColors,
        },
      },
    },
    plugins: { legend: { display: false } },
  };

  data = {
    labels: this.days,
    datasets: [
      {
        data: this.costs,
        backgroundColor: '#16C782',
        categoryPercentage: 1.11,
        borderColor: '#898989',
        borderWidth: 1,
        stacked: true,
      },
    ],
  };

  render() {
    const chartOptionsWithTheme = { ...this.options, theme: this.props.theme };
    return (
      <div className='diagram' data-testid='diagram'>
        <Bar options={chartOptionsWithTheme} data={this.data} />
      </div>
    );
  }
}

const mapStateToProps = (state: rootState) => {
  const { theme } = state.app;

  return {
    theme: theme,
  };
};

export const Diagram = connect(mapStateToProps)(DiagramComponent);
