import { IBlogHighlight } from '../../utils/types';

export interface IBlogHighlightProps {
  minReadContent: string;
  readBlogContent: string;
  blog: IBlogHighlight;
  reversed?: boolean;
}
