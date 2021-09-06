import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import Router from 'next/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { getContents } from '../utils/contentful';
import App from 'next/app';
import { IAbdulhamidPortfolioContent } from '../utils/types';

nprogress.configure({
  minimum: 0.5,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => {
  nprogress.start();
});

Router.events.on('routeChangeComplete', () => {
  nprogress.done();
});

Router.events.on('routeChangeError', () => {
  nprogress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async function (appContenxt: AppContext) {
  const locale = appContenxt.router?.locale || 'en-US';
  const res = (await getContents(locale)) as IAbdulhamidPortfolioContent;
  const appProps = await App.getInitialProps(appContenxt);
  return { pageProps: { ...appProps, appContent: res, locale } };
};

export default MyApp;
