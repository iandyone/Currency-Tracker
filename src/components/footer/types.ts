export interface IFooterColumn {
  column: string;
  links: IFooterLink[];
}

export interface IFooterLink {
  name: string;
  route: string;
}
