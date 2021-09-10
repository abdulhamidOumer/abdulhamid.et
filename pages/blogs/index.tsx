import { NextPageContext } from 'next';
import Head from 'next/head';
import LargeBlogHighlight from '../../components/Blogs/largeHighlight';
import SmallBlogHighLight from '../../components/Blogs/smallHighlight';
import { getBlogs } from '../../utils/mdx';
import { IAppProps, IBlogHighlight } from '../../utils/types';

interface IBlogsPageProps extends IAppProps {
  blogs: IBlogHighlight[];
}

const BlogsPage = (props: IBlogsPageProps) => {
  return (
    <div>
      <Head>
        <title>
          {props.appContent?.blogSectionTitle || ''} -{' '}
          {props.appContent?.siteTitle}
        </title>
        <meta name="description" content="Abdulhamid Oumer's Blogs" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <section className="pt-32 md:px-20 px-3 bg-gray-100 dark:bg-gray-800 pb-12">
        <h1 className="text-5xl font-bold text-gray-500 dark:text-gray-100">
          {props.appContent?.myBlogs || ''}
        </h1>

        <div className="flex justify-between flex-row flex-wrap w-full mt-6">
          <div className="xl:mb-5">
            {props.blogs?.length > 0 && (
              <LargeBlogHighlight
                minReadContent={props.appContent?.minuteRead || ''}
                readBlogContent={props.appContent?.readBlog || ''}
                blog={props.blogs[0]}
              />
            )}
          </div>
          {props.blogs?.map(
            (blog, index) =>
              index !== 0 && (
                <SmallBlogHighLight
                  minReadContent={props.appContent?.minuteRead || ''}
                  readBlogContent={props.appContent?.readBlog || ''}
                  blog={blog}
                />
              ),
          )}
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async (ctx: NextPageContext) => {
  const results = getBlogs([
    'slug',
    'date',
    'thumbnail',
    'title',
    'description',
    'readingMinute',
  ]);
  return { props: { blogs: results.blogs } };
};

export default BlogsPage;
