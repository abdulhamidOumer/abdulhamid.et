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

export interface ISocialsContent extends IContentMain {
  fields?: {
    githubTitle?: string;
    githubLink?: string;
    twitterTitle?: string;
    twitterLink?: string;
    instagramTitle?: string;
    instagramLink?: string;
    linkedInTitle?: string;
    linkedInLink?: string;
    facebookTitle?: string;
    facebookLink?: string;
    devTitle?: string;
    devLink?: string;
    emailTitle?: string;
    emailAddress?: string;
    companyLink?: string;
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

  blogSectionTitle?: string;
  readBlog?: string;
  minuteRead?: string;
  contactSectionTitle?: string;
  contactSectionDescription?: string;
  preferAnEmail?: string;
  reachWithEmail?: string;
  jobTitle?: string;
  currentJobStatus?: string;
  companyName?: string;
  myBlogs?: string;
  viewAll?: string;
  siteMade?: string;
  and?: string;
  hostedOn?: string;
  fullCode?: string;
  socials?: ISocialsContent;
}

export interface IAppProps extends AppContext {
  appContent: IAbdulhamidPortfolioContent;
  locale: string;
}

export interface IBlogHighlight {
  slug: string;
  date: string;
  thumbnail: string;
  title: string;
  description: string;
  readingMinute: string;
}
