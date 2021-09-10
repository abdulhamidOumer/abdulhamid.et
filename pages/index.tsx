import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import LargeBlogHighlight from '../components/Blogs/largeHighlight';
import ComingSoon from '../components/ComingSoonBanner';
import About from '../components/Home/about';
import HomeBlogs from '../components/Home/blogs';
import ContactMe from '../components/Home/contact';
import Hero from '../components/Home/hero';
import TechStacks from '../components/Home/techStacks';
import Works from '../components/Home/works';
import Header from '../components/Layouts/header';
import styles from '../styles/Home.module.css';
import { SITE_URL } from '../utils/constants';
import { getBlogs } from '../utils/mdx';
import { IAppProps, IBlogHighlight } from '../utils/types';

interface IHompePageProps extends IAppProps {
  highLightBlogs: IBlogHighlight[];
}

const Home = (props: IHompePageProps) => {
  const [comingSoonOpen, setComingSoonOpen] = useState(true);

  const onToglleComingSoon = () => {
    setComingSoonOpen(!comingSoonOpen);
  };

  return (
    <div className="dark:bg-gray-800 bg-gray-100">
      <Head>
        <title>
          {`${props.appContent?.fullName} | ${props.appContent?.jobTitle}`}
        </title>
        <meta
          name="description"
          content={props.appContent?.aboutMeDescription}
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          title={`${props.appContent?.fullName} | ${props.appContent?.jobTitle}`}
        />
        <meta property="og:locale" content={props.locale} />
        <meta
          content={props.appContent?.aboutMeDescription}
          name="description"
        />
        <meta content="article" property="og:type" />
        <meta
          content={`${props.appContent?.fullName} | ${props.appContent?.jobTitle}`}
          property="og:title"
        />
        <meta
          content={props.appContent?.aboutMeDescription}
          property="og:description"
        />
        <meta content={`${SITE_URL}`} property="og:url" />
        <meta content={`/static/abdulhamid-oumer.jpeg`} property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* <ComingSoon isOpen={comingSoonOpen} onToogleOpen={onToglleComingSoon} /> */}

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
      <HomeBlogs
        title={props.appContent?.blogSectionTitle || ''}
        viewAllContent={props?.appContent?.viewAll || ''}
        highLightBlogs={props.highLightBlogs}
        minReadContent={props.appContent?.minuteRead || ''}
        readBlogContent={props.appContent?.readBlog || ''}
      />

      <ContactMe
        title={props.appContent?.contactSectionTitle || ''}
        description={props.appContent?.contactSectionDescription || ''}
        socialsContent={props.appContent?.socials}
        preferAnEmailContent={props.appContent?.preferAnEmail || ''}
        reachWithEmailContent={props.appContent?.reachWithEmail || ''}
      />
    </div>
  );
};

export const getStaticProps = async (ctx: NextPageContext) => {
  const highlights = getBlogs(
    ['slug', 'date', 'thumbnail', 'title', 'description', 'readingMinute'],
    2,
  );
  return { props: { highLightBlogs: highlights.blogs } };
};

export default Home;
