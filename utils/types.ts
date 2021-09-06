import { Asset } from 'contentful';
import { AppContext } from 'next/app';

export interface IMenuItemContent {
  metadata: unknown;
  sys: unknown;
  fields?: {
    title?: string;
    routeHash?: string;
  };
}

export interface IAbdulhamidPortfolioContent {
  siteTitle?: string;
  menus?: IMenuItemContent[];
  greeting?: string;
  fullName?: string;
  jobDescription?: string;
  heroImage?: Asset;
  letsTalk?: string;
}

export interface IAppProps extends AppContext {
  appContent: IAbdulhamidPortfolioContent;
  locale: string;
}
