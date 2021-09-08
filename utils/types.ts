import { Asset } from 'contentful';
import { AppContext } from 'next/app';

export interface IContentMain {
  metadata: unknown;
  sys: unknown;
}
export interface IMenuItemContent extends IContentMain {
  fields?: {
    title?: string;
    routeHash?: string;
  };
}

export interface IWorkContent extends IContentMain {
  fields?: {
    title?: string;
    shortDescription?: string;
    longDescription?: string;
    defaultImage?: Asset;
    screenshots?: Asset[];
    organization?: string;
    projectLink?: string;
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

  aboutMeTitle?: string;
  aboutMeDescription?: string;
  techStackTitle?: string;
  techStackDescription?: string;
  worksTitle?: string;
  worksDescription?: string;
  works?: IWorkContent[];

  readMore?: string;
  viewProject?: string;
}

export interface IAppProps extends AppContext {
  appContent: IAbdulhamidPortfolioContent;
  locale: string;
}
