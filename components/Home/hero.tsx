import Image from 'next/image';
import myImage from '../../assets/images/abdulhamid-black-and-white.png';

interface IHeroProps {
  greetingLabel: string;
  fullName: string;
  jobDescription: string;
  currentLocale: string;
}

const Hero = (props: IHeroProps) => {
  return (
    <section
      id="home"
      className="flex pt-40 px-3 md:px-0 items-center  bg-white dark:bg-gray-900 flex-col"
    >
      <h3
        className={`sm:text-4xl text-2xl w-full md:w-3/4 text-center ${
          props.currentLocale === 'am' ? '' : 'font-medium'
        } text-gray-600 dark:text-white`}
      >
        {props.greetingLabel}{' '}
        <span className="font-bold text-secondary-500">{props.fullName}</span>
        {props.jobDescription}
      </h3>

      <Image src={myImage} alt="Abdulhamid Oumer" />
    </section>
  );
};

export default Hero;
