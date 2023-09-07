import { Theme } from '@appTypes/index';

export interface IGraphProps {
  period: number;
  currency: string;
  theme: Theme;
  costs: {
    [key: number]: number;
  };
}
