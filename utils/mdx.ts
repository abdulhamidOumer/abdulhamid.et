/* eslint-disable import/group-exports */
/* eslint-disable @typescript-eslint/no-unused-vars */
// utils/mdxUtils.ts
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

type Items = {
  [key: string]: string;
};

type Blog = {
  data: {
    [key: string]: string;
  };
  content: string;
};

const BLOGS_PATH = join(process.cwd(), 'blogs');

function getBlogFilePaths(): string[] {
  return fs.readdirSync(BLOGS_PATH).filter(path => /\.mdx?$/.test(path));
}

export function getBlog(slug: string): Blog {
  const fullPath = join(BLOGS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const readingMinute = `${readingTime(content).minutes?.toFixed(0)}`;
  const concatedData = { ...data, readingMinute };

  return { data: concatedData, content };
}

export function getSingleBlog(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getBlog(slug);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getBlogs(
  fields: string[] = [],
  maxLimit?: number,
): {
  blogs: Items[];
} {
  const filePaths = getBlogFilePaths();
  const blogs = filePaths
    .map(filePath => getSingleBlog(filePath, fields))
    // sort blogs by date in descending order
    .sort((blog1, blog2) => (blog1.date > blog2.date ? -1 : 1));

  if (maxLimit) {
    const limited = blogs.slice(0, maxLimit);
    return { blogs: limited };
  }

  return { blogs };
}
