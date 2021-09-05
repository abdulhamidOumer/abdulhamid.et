import Image from 'next/image';
import myImage from '../../assets/images/abdulhamid-black-and-white.png';

const Hero = () => {
  return (
    <div className="flex justify-end items-center  bg-white h-full flex-col">
      <h3 className="text-3xl w-3/4 text-center font-medium text-gray-600">
        Hi, I Am{' '}
        <span className="font-bold text-secondary-500">Abdulhamid Oumer</span>.{' '}
        A Full Stack Software Engineer Located In Addis Ababa, Ethiopia.
      </h3>

      <Image src={myImage} alt="Abdulhamid Oumer" />
    </div>
  );
};

export default Hero;
