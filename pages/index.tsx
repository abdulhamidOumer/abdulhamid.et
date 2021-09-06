import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import ComingSoon from '../components/ComingSoonBanner';
import About from '../components/Home/about';
import Hero from '../components/Home/hero';
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

      <About />

      {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>*/}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
