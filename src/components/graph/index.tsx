import './index.scss';

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { PureComponent } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IGraphProps {
  period: number;
  currency: string;
  costs: {
    [key: number]: number;
  };
}

export class Graph extends PureComponent<IGraphProps, object> {
  private values: number[] = Object.values(this.props.costs);
  private days: string[] = new Array(this.props.period).fill(0).map((_, index) => String(`Day ${index + 1}`));
  private costs: string[] = this.values.map(String);

  constructor(props: IGraphProps) {
    super(props);
  }

  options = {
    responsive: true,
    scales: {
      x: {
        min: 0,
        max: this.props.period,
      },
      y: {
        min: Math.min(Math.min(...this.values) - 1, 0),
        max: Math.max(...this.values) + 1,
      },
    },
  };

  data = {
    labels: this.days,
    datasets: [
      {
        label: this.props.currency,
        data: this.costs,
        backgroundColor: '#00ce2c',
      },
    ],
  };

  render() {
    return (
      <div className='graph'>
        <Bar options={this.options} data={this.data} />
      </div>
    );
  }
}
