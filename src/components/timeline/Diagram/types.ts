export interface IGraphProps {
  period: number;
  currency: string;
  costs: {
    [key: number]: number;
  };
}
