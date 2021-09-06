import { ContentfulClientApi } from 'contentful';

const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const spaceID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const client: ContentfulClientApi = require('contentful').createClient({
  space: spaceID || '',
  accessToken: accessToken || '',
});

export const getContents = async (locale: string, version: number = 1) => {
  const entries = await client.getEntries({ locale });
  if (Array.isArray(entries.items) && entries.items?.length >= version) {
    const index = version - 1;
    return entries.items[index].fields;
  }

  throw new Error('No entries found');
};
