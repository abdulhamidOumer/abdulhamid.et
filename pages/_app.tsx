import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/blog.css';
import type { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { getContents } from '../utils/contentful';
import App from 'next/app';
import { IAbdulhamidPortfolioContent, IMenuItemContent } from '../utils/types';
import Header from '../components/Layouts/header';
import { useEffect, useState } from 'react';
import { ELocalStorageKeys, EThemes } from '../utils/constants';
import Footer from '../components/Layouts/footet';

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
  const content = pageProps.appContent as IAbdulhamidPortfolioContent;
  const [activeRoute, setActiveRoute] = useState('#home');
  const [currentTheme, setCurrentTheme] = useState<EThemes>(EThemes.light);

  const checkWhichRouteIsActive = () => {
    const hash = window.location.hash;
    const path = window.location.pathname;

    if ((!hash || hash === '#') && path === '/') {
      setActiveRoute('#home');
    } else if (hash) {
      setActiveRoute(hash);
    } else if (path.includes('blog')) {
      setActiveRoute('#blogs');
    } else {
      setActiveRoute(path);
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
    Router.events.on('routeChangeComplete', checkWhichRouteIsActive);
    return () => {
      Router.events.off('hashChangeComplete', checkWhichRouteIsActive);
      Router.events.off('routeChangeComplete', checkWhichRouteIsActive);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="theme-color" content="#8b5cf6" />
      </Head>
      <main className="bg-gray-100 dark:bg-gray-800 h-auto w-full absolute">
        <Header
          currentTheme={currentTheme}
          currentLocale={pageProps.locale}
          currentRoute={activeRoute}
          onChangeTheme={handleThemeChange}
          letsTalkLabel={pageProps.appContent?.letsTalk || ''}
          menus={pageProps.appContent?.menus || []}
          title={pageProps?.appContent?.siteTitle || ''}
          emailAddress={content?.socials?.fields?.emailAddress || ''}
        />
        <Component {...pageProps} />
        <Footer
          andContent={content?.and || ''}
          codeOn={content?.fullCode || ''}
          companyName={content?.companyName || ''}
          currentJobStatus={content?.currentJobStatus || ''}
          fullName={content?.fullName || ''}
          hostedOn={content?.hostedOn || ''}
          jobTitle={content?.jobTitle || ''}
          siteMadeWith={content?.siteMade || ''}
          socialsContent={content?.socials}
        />
      </main>
    </>
  );
}

MyApp.getInitialProps = async function (appContenxt: AppContext) {
  const locale = appContenxt.router?.locale || 'en-US';
  const res = (await getContents(locale)) as IAbdulhamidPortfolioContent;
  const appProps = await App.getInitialProps(appContenxt);
  return { pageProps: { ...appProps, appContent: res, locale } };
};

export default MyApp;
