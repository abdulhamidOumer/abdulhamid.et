import React from 'react';
import Image from 'next/image';
import illustration from '../../public/static/illustration.png';

interface ICominSoonProps {
  isOpen: boolean;
  onToogleOpen: () => void;
}

const ComingSoon = (props: ICominSoonProps) => {
  return props.isOpen ? (
    <div className=" fixed h-full w-full flex justify-center items-center bg-white dark:bg-gray-900 z-40 flex-col px-5">
      <Image src={illustration} height={350} width={600} />
      <h1 className="text-5xl font-bold dark:text-white text-gray-700 mt-5">
        Coming Soon!
      </h1>
      <p className="text-gray-400 mt-4">
        My new site is under construction. Please check back later for the full
        features.
      </p>
      <button
        className=" my-2 px-6 uppercase flex flex-row mb-4 outline-none focus:outine-none items-center text-white py-3 font-bold bg-primary-500 dark:bg-primary-600 dark:text-gray-100 hover:bg-primary-600 hover:shadow-lg rounded-md"
        onClick={props.onToogleOpen}
        type="submit"
      >
        View Status
      </button>
    </div>
  ) : null;
};

export default ComingSoon;
