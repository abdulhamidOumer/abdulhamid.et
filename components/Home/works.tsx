import Image from 'next/image';
import YegnaHome from '../../assets/images/Yegna-Home.jpeg';
import YegnaScreenShot from '../../assets/images/Yegna-Home.png';
import BuilingIcon from '../../assets/icons/building-regular.svg';
import Dialog from '@bit/mui-org.material-ui.dialog';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import { IWorkContent } from '../../utils/types';

interface IWorkHighlightProps {
  title: string;
  shortDescription: string;
  image: string;
  readMoreLabel: string;
  setOpenHighlight?: () => void;
}

interface IWorksProps {
  title: string;
  description: string;
  readMoreLabel: string;
  viewProjectLabel: string;
  works: IWorkContent[];
}

const WorkHihlight = (props: IWorkHighlightProps) => {
  return (
    <div
      className="shadow-xl bg-no-repeat bg-cover bg-center rounded-md mt-4"
      style={{
        backgroundImage: `url(${props.image})`,
        width: 450,
        height: 250,
        maxWidth: '100%',
      }}
    >
      <div className="portfolio-wrapper p-5 flex flex-col justify-end">
        <h3 className="text-white text-xl font-bold">{props.title}</h3>
        <p className="text-gray-300 text-sm">{props.shortDescription}</p>

        <button
          onClick={props.setOpenHighlight}
          className="p-1 mt-2 text-white rounded-lg py-2 bg-primary-500 hover:bg-primary-600"
        >
          {props.readMoreLabel}
        </button>
      </div>
    </div>
  );
};

const Works = (props: IWorksProps) => {
  const [openHighlight, setOpenHighlight] = useState<null | IWorkContent>(null);

  const onCloseHighlight = () => {
    setOpenHighlight(null);
  };

  return (
    <section
      id="works"
      className=" p-3 px-14 dark:bg-gray-800 bg-gray-100 flex flex-col items-center"
    >
      <h3 className="text-xl md:text-3xl text-gray-500 dark:text-white relative">
        {props.title}
      </h3>
      <p className="my-5 text-gray-400 dark:text-gray-300 text-center">
        {' '}
        {props.description}{' '}
      </p>

      <div className="flex justify-evenly flex-wrap w-full">
        {props.works.map((work, index) => (
          <WorkHihlight
            key={`work-h-${index}`}
            title={work.fields?.title || ''}
            shortDescription={work.fields?.shortDescription || ''}
            image={
              `https:${work.fields?.defaultImage?.fields?.file?.url}` || ''
            }
            setOpenHighlight={() => setOpenHighlight(work)}
            readMoreLabel={props.readMoreLabel}
          />
        ))}
      </div>

      <Dialog open={Boolean(openHighlight)} onClose={onCloseHighlight}>
        {openHighlight && (
          <div className="bg-white p-5">
            <Carousel autoPlay showStatus={false}>
              {openHighlight?.fields?.screenshots &&
                openHighlight?.fields?.screenshots.map((screenShot, index) => (
                  <div
                    className="w-full h-80 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(http:${
                        screenShot?.fields?.file?.url || ''
                      })`,
                    }}
                    key={`work-screenshot-${index}`}
                  ></div>
                ))}
            </Carousel>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold md:text-2xl text-gray-500 dark:text-white">
                {openHighlight.fields?.title}
              </h3>
              <p className="text-sm text-secondary-500 font-bold flex items-end">
                <BuilingIcon className="mr-2" width={20} height={20} />
                {openHighlight.fields?.organization}
              </p>
            </div>
            <p className="text-sm md:text-md text-gray-400 dark:text-gray-300">
              {openHighlight.fields?.longDescription}
            </p>
            <div className="mt-6">
              <a
                className="p-3 text-white rounded-lg relative bg-primary-500"
                href={openHighlight.fields?.projectLink || ''}
                target="_blank"
              >
                {props.viewProjectLabel}
              </a>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
};

export default Works;
