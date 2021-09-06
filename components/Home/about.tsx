import HelpIcon from '../../assets/icons/help-circle.svg';

const About = () => {
  return (
    <section className="bg-primary-500 py-10 flex flex-col justify-center items-center">
      {/* <div className="flex justify-center items-center h-12 w-12 text-white dark:text-primary-500 bg-gray-700   dark:bg-white rounded-full">
        <HelpIcon />
      </div> */}

      <section
        id="about"
        className="p-3 md:p-14 mt-3 md:text-center bg-primary-500 md:w-3/4 text-white"
      >
        <h2 className="text-3xl font-bold ">About Me</h2>
        <p className=" mt-3 text-lg">
          I am a motivated full stack developer with a passion to create
          marvelous software and programming solutions to different real life
          problems. I have an intuitive desire to learn new technologies and how
          they work in depth. I also have good communication skills and work
          well with others from different environments.
        </p>
      </section>
    </section>
  );
};

export default About;
