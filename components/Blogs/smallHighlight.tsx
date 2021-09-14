import Link from 'next/link';
import { IBlogHighlightProps } from './types';
import ArrowRightIcon from '../../assets/icons/arrow-right-solid.svg';

const SmallBlogHighLight = (props: IBlogHighlightProps) => {
  const { blog } = props;

  return (
    <div
      className={`blog-card rounded-xl mt-3 md:mr-5 max-w-full w-96 flex flex-col bg-white dark:bg-gray-900`}
    >
      <div
        style={{ backgroundImage: `url(${props.blog?.thumbnail || ''})` }}
        className="rounded-t-xl w-full h-44 bg-no-repeat bg-cover bg-center"
      ></div>

      <div className="w-full p-5 flex flex-col justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-300 flex justify-between">
          <p className="">{blog.date}</p>
          <p>
            {blog.readingMinute} {props.minReadContent}
          </p>
        </div>
        <h3 className="text-gray-700 dark:text-white text-3xl w-full mt-2 font-bold">
          {blog.title}
        </h3>
        <p className="text-gray-400 dark:text-gray-300">{blog.description}</p>
        <Link passHref href={`/blogs/${blog.slug}`}>
          <a
            style={{ width: 'fit-content' }}
            className="mt-3 text-center py-2 text-primary-500 font-bold rounded-lg flex items-center"
          >
            {props.readBlogContent}
            <ArrowRightIcon className="ml-2" width={15} height={15} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SmallBlogHighLight;
