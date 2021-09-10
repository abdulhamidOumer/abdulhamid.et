/* eslint-disable import/group-exports */
// pages/posts/[slug].tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getBlog, getBlogs } from '../../utils/mdx';
import { IAppProps, IBlogHighlight } from '../../utils/types';
import CodeHighlighter from '../../components/Blogs/code.component';

const components = { Link, code: CodeHighlighter };

interface returnPath {
  params: {
    blogslug: string;
  };
  locale: string;
}

interface Props extends IAppProps {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IBlogHighlight, 'slug'>;
  slug: string;
}

const SITE_URL = 'https://abdulhamid.et';

const PostPage: React.FC<Props> = ({
  source,
  frontMatter,
  appContent,
  slug,
}: Props) => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>{`${frontMatter.title || ''} | ${
          appContent.siteTitle || ''
        }`}</title>
        <meta
          title={`${frontMatter.title || ''} | ${appContent.siteTitle || ''}`}
        />
        <meta content={frontMatter.description || ''} name="description" />
        <meta content="article" property="og:type" />
        <meta
          content={`${frontMatter.title || ''} | ${appContent.siteTitle || ''}`}
          property="og:title"
        />
        <meta
          content={frontMatter.description || ''}
          property="og:description"
        />
        <meta content={`${SITE_URL}/blogs/${slug || ''}`} property="og:url" />
        <meta
          content={`${SITE_URL}/${frontMatter.thumbnail || ''}`}
          property="og:image"
        />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      <article className="flex mt-24 mb-10 justify-center">
        <div className="rounded-lg bg-white p-10 dark:bg-gray-900 flex flex-col w-full lg:w-3/4 xl:w-3/5">
          <div className="w-full">
            <Image
              className="rounded-md"
              alt={frontMatter.title}
              src={frontMatter.thumbnail}
              width={16}
              height={9}
              layout="responsive"
            />
          </div>

          <div className="flex justify-between text-sm mt-2 text-gray-500 dark:text-gray-200">
            <p>{frontMatter.date}</p>
            <p>{frontMatter.readingMinute} min read</p>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold mt-5 text-gray-700 dark:text-gray-100">
            {frontMatter.title}
          </h2>

          <div className="blog">
            <MDXRemote {...source} components={components} />
          </div>
        </div>
      </article>
    </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { content, data } = getBlog(params?.blogslug as string);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params?.blogslug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const { blogs } = getBlogs(['slug']);
  const enPaths: returnPath[] = blogs.map(blog => ({
    params: {
      blogslug: blog.slug,
    },
    locale: 'en-US',
  }));

  const enPathsCopy = [...enPaths];
  const amPaths = enPathsCopy.map(zpath => ({
    ...zpath,
    locale: 'am',
  }));
  const paths = [...amPaths, ...enPaths];

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
