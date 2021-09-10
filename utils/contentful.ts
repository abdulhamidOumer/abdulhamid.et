import { ContentfulClientApi } from 'contentful';
import { mainEntryId } from './constants';

const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const spaceID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

const client: ContentfulClientApi = require('contentful').createClient({
  space: spaceID || '',
  accessToken: accessToken || '',
});

export const getContents = async (locale: string) => {
  try {
    const entry = await client.getEntry(mainEntryId, { locale });
    if (entry.fields) return entry.fields;

    throw new Error('No entries found');
  } catch (error) {
    console.log('getContents error', error);
  }
};
