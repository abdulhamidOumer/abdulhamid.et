import { Asset } from 'contentful';
import Image from 'next/image';

interface IContentImageProps {
  asset: Asset;
}

const ContentImage = (props: IContentImageProps) => {
  return (
    <Image
      src={`https:${props.asset?.fields?.file?.url}`}
      width={props.asset?.fields?.file?.details?.image?.width || 0}
      height={props.asset?.fields?.file?.details?.image?.height || 0}
      alt={props.asset?.fields?.title}
    />
  );
};

export default ContentImage;
