import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ComingSoon from '../components/ComingSoonBanner';
import About from '../components/Home/about';
import Hero from '../components/Home/hero';
import TechStacks from '../components/Home/techStacks';
import Works from '../components/Home/works';
import Header from '../components/Layouts/header';
import styles from '../styles/Home.module.css';
import { IAppProps } from '../utils/types';

const Home = (props: IAppProps) => {
  const [comingSoonOpen, setComingSoonOpen] = useState(true);

  const onToglleComingSoon = () => {
    setComingSoonOpen(!comingSoonOpen);
  };

  return (
    <div>
      <Head>
        <title>{props.appContent?.siteTitle}</title>
        <meta name="description" content="Abdulhamid Oumer Personal Site" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <ComingSoon isOpen={comingSoonOpen} onToogleOpen={onToglleComingSoon} />

      <Hero
        currentLocale={props.locale || ''}
        greetingLabel={props.appContent?.greeting || ''}
        fullName={props.appContent?.fullName || ''}
        jobDescription={props.appContent?.jobDescription || ''}
      />

      <About
        title={props.appContent?.aboutMeTitle || ''}
        description={props.appContent?.aboutMeDescription || ''}
      />

      <TechStacks
        title={props.appContent?.techStackTitle || ''}
        description={props.appContent?.techStackDescription || ''}
      />

      <Works
        title={props.appContent?.worksTitle || ''}
        description={props.appContent?.worksDescription || ''}
        works={props.appContent?.works || []}
        viewProjectLabel={props.appContent?.viewProject || ''}
        readMoreLabel={props.appContent?.readMore || ''}
      />
    </div>
  );
};

export default Home;
