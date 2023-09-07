import { handlerWithStringProps } from '@appTypes/index';

export interface ISearchProps {
  className: string;
  handlerOnClick: handlerWithStringProps;
}

export interface ISearchState {
  value: string;
  searchResult: string[];
  showOptions: boolean;
}
