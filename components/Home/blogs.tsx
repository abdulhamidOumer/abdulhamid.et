import Link from 'next/link';
import { IBlogHighlight } from '../../utils/types';
import LargeBlogHighlight from '../Blogs/largeHighlight';
import ArrowRightSolid from '../../assets/icons/book-open.svg';

interface IHomeBlogProps {
  highLightBlogs: IBlogHighlight[];
  title: string;
  viewAllContent: string;
  minReadContent: string;
  readBlogContent: string;
}

const HomeBlogs = (props: IHomeBlogProps) => {
  return (
    <section id="blogs" className="px-3 md:px-20 py-5">
      <h3 className="text-center mb-4 text-2xl font-bold md:font-normal md:text-3xl text-gray-500 dark:text-white">
        {props.title}
      </h3>
      <div className="flex justify-evenly xl:justify-between flex-row xl:flex-col flex-wrap w-full">
        {props.highLightBlogs?.length > 0 && (
          <LargeBlogHighlight
            minReadContent={props.minReadContent}
            readBlogContent={props.readBlogContent}
            blog={props.highLightBlogs[0]}
          />
        )}
        {props.highLightBlogs?.length > 1 && (
          <LargeBlogHighlight
            minReadContent={props.minReadContent}
            readBlogContent={props.readBlogContent}
            reversed
            blog={props.highLightBlogs[1]}
          />
        )}
      </div>
      <div className="flex justify-center xl:justify-start view-all-container">
        <Link href="/blogs">
          <a className="mt-3 bg-primary-500 w-48 text-center text-white py-3 rounded-md  flex justify-between p-3 pl-5">
            <ArrowRightSolid width={23} height={23} />
            {props.viewAllContent}
            <div />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default HomeBlogs;
