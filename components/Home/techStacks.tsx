import { ReactElement } from 'react';
import Rating from 'react-rating';
import ReactIcon from '../../assets/icons/react-brands.svg';
import NodeBrands from '../../assets/icons/node-js-brands.svg';
import ShopifyBrands from '../../assets/icons/shopify-brands.svg';
import DockerBrands from '../../assets/icons/docker-brands.svg';
import GitlabBrands from '../../assets/icons/gitlab-brands.svg';
import MongoBrands from '../../assets/icons/mongo-brands.svg';
import StarIcon from '../../assets/icons/star-regular.svg';
import SolidStarIcon from '../../assets/icons/star-solid.svg';

interface ITechStack {
  title: string;
  icon: any;
  rate: number;
}

const TechStack = (props: ITechStack) => {
  return (
    <div className="flex flex-col items-center md:pr-0 lg:mx-0 tech-stack">
      <props.icon className="text-gray-400 w-10 lg:w-16" />
      <h4 className="lg:text-lg text-gray-400 dark:text-white mt-2">
        {props.title}
      </h4>
      <Rating
        emptySymbol={
          <StarIcon className="text-secondary-500" width={16} height={16} />
        }
        fullSymbol={
          <SolidStarIcon
            className="text-secondary-500"
            width={16}
            height={16}
          />
        }
        initialRating={props.rate}
        readonly
      />
    </div>
  );
};

interface ITechStacksProps {
  title: string;
  description: string;
}

const TechStacks = (props: ITechStacksProps) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 flex flex-col p-3 md:p-5 items-center">
      <h3 className="text-2xl font-bold md:font-normal md:text-3xl text-gray-500 dark:text-white relative">
        {props.title}
      </h3>
      <p className="mt-2 text-gray-500 dark:text-gray-300 text-center">
        {' '}
        {props.description}{' '}
      </p>
      <div className="flex w-full lg:px-20 2xl:px-40 justify-between mt-10 items-end overflow-x-auto">
        <TechStack icon={ReactIcon} title="React" rate={4.5} />
        <TechStack icon={NodeBrands} title="Node.JS" rate={4.5} />
        <TechStack icon={MongoBrands} title="Mongo DB" rate={4} />
        <TechStack icon={ShopifyBrands} title="Shopify" rate={2.5} />
        <TechStack icon={DockerBrands} title="Docker" rate={4} />
        <TechStack icon={GitlabBrands} title="Gitlab CI/CD" rate={4} />
      </div>
    </div>
  );
};

export default TechStacks;
