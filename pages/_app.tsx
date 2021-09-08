import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import Router from 'next/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { getContents } from '../utils/contentful';
import App from 'next/app';
import { IAbdulhamidPortfolioContent, IMenuItemContent } from '../utils/types';
import Header from '../components/Layouts/header';
import { useEffect, useState } from 'react';
import { ELocalStorageKeys, EThemes } from '../utils/constants';

nprogress.configure({
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
  const [activeRoute, setActiveRoute] = useState('#home');
  const [currentTheme, setCurrentTheme] = useState<EThemes>(EThemes.light);

  const checkWhichRouteIsActive = () => {
    const hash = window.location.hash;
    console.log(hash);
    if (!hash || hash === '#') {
      setActiveRoute('#home');
    } else {
      setActiveRoute(hash);
    }
  };

  const handleThemeChange = (theme: EThemes) => {
    localStorage.setItem(ELocalStorageKeys.theme, theme);
    if (theme === EThemes.dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setCurrentTheme(theme);
  };

  useEffect(() => {
    checkWhichRouteIsActive();

    const savedTheme = localStorage.getItem(ELocalStorageKeys.theme);
    const darkDevice = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const deviceTheme = darkDevice ? EThemes.dark : EThemes.light;
    const theme = savedTheme ? (savedTheme as EThemes) : deviceTheme;
    handleThemeChange(theme);

    Router.events.on('hashChangeComplete', checkWhichRouteIsActive);
    return () => {
      Router.events.off('hashChangeComplete', checkWhichRouteIsActive);
    };
  }, []);

  return (
    <main className="bg-white dark:bg-gray-800 h-full w-full absolute">
      <Header
        currentTheme={currentTheme}
        currentLocale={pageProps.locale}
        currentRoute={activeRoute}
        onChangeTheme={handleThemeChange}
        letsTalkLabel={pageProps.appContent?.letsTalk || ''}
        menus={pageProps.appContent?.menus || []}
        title={pageProps?.appContent?.siteTitle || ''}
      />
      <Component {...pageProps} />
    </main>
  );
}

MyApp.getInitialProps = async function (appContenxt: AppContext) {
  const locale = appContenxt.router?.locale || 'en-US';
  const res = (await getContents(locale)) as IAbdulhamidPortfolioContent;
  const appProps = await App.getInitialProps(appContenxt);
  return { pageProps: { ...appProps, appContent: res, locale } };
};

export default MyApp;
