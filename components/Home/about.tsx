interface IAboutProps {
  title: string;
  description: string;
}

const About = (props: IAboutProps) => {
  return (
    <section
      id="about"
      className="bg-primary-500 py-10 flex flex-col justify-center items-center"
    >
      {/* <div className="flex justify-center items-center h-12 w-12 text-white dark:text-primary-500 bg-gray-700   dark:bg-white rounded-full">
        <HelpIcon />
      </div> */}

      <section className="p-3 md:p-14 mt-3 text-center bg-primary-500 md:w-3/4 xl:w-3/5 2xl:w-1/2 2xl:py-20 text-white">
        <h2 className="text-xl md:text-3xl font-bold ">{props.title}</h2>
        <p className=" mt-3 text-md">{props.description}</p>
      </section>
    </section>
  );
};

export default About;
