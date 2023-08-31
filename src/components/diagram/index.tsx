import { IGraphProps } from '@components/Diagram/types';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export class Diagram extends PureComponent<IGraphProps, object> {
  private values: number[] = Object.values(this.props.costs);
  private days: string[] = new Array(this.props.period).fill(0).map((_, index) => String(`Day ${index + 1}`));
  private costs: string[] = this.values.map(String);

  constructor(props: IGraphProps) {
    super(props);
  }

  private options = {
    responsive: true,
    scales: {
      x: {
        min: 0,
        max: this.props.period,
        title: {
          display: true,
          text: 'DAY',
          color: 'white',
          padding: 5,
          align: 'end' as Align,
        },
        ticks: {
          display: false,
        },
        border: {
          color: 'white',
        },
      },
      y: {
        max: 16,
        min: -16,
        title: {
          display: true,
          text: 'VALUE',
          color: 'white',
          padding: 5,
          align: 'end' as Align,
        },
        ticks: {
          display: false,
        },
        border: {
          color: 'white',
        },
      },
    },
    plugins: { legend: { display: false } },
  };

  private data = {
    labels: this.days,
    datasets: [
      {
        data: this.costs,
        backgroundColor: '#16C782',
        categoryPercentage: 1.1,
        borderColor: 'red',
        borderWidth: 3,
      },
    ],
  };

  render() {
    return (
      <div className='diagram' data-testid='diagram'>
        <Bar options={this.options} data={this.data} />
      </div>
    );
  }
}
