import Image from 'next/image';
import myImage from '../../assets/images/abdulhamid-black-and-white.png';

const Hero = () => {
  return (
    <>
      <div className="flex pt-24 items-center  bg-white min-h-full flex-col">
        <h3 className="text-4xl w-3/4 text-center font-medium text-gray-600">
          Hi, I Am{' '}
          <span className="font-bold text-secondary-500">Abdulhamid Oumer</span>
          . A Full Stack Software Engineer Located In Addis Ababa, Ethiopia.
        </h3>

        <Image src={myImage} alt="Abdulhamid Oumer" />
        <div className="w-full h-60 bg-primary-500" />
      </div>
    </>
  );
};

export default Hero;
