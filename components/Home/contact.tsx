import Link from 'next/link';
import GithubIcon from '../../assets/icons/github.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import MailIcon from '../../assets/icons/mail.svg';
import { ISocialsContent } from '../../utils/types';

interface IContactMeProps {
  title: string;
  description: string;
  socialsContent?: ISocialsContent;
  preferAnEmailContent: string;
  reachWithEmailContent: string;
}

const ContactMe = (props: IContactMeProps) => {
  const socialsContent = props.socialsContent?.fields;

  return (
    <section
      id="contact"
      className="px-3 pt-10 md:px-20 max-w-full py-5  flex flex-col justify-center items-center mb-5"
    >
      <h3 className="text-center mb-2 text-2xl font-bold md:font-normal md:text-3xl text-gray-500 dark:text-white">
        {props.title}
      </h3>

      <p className="text-gray-500 dark:text-gray-300 text-center">
        {props.description}
      </p>

      <div className="flex mt-2 md:divide-x divide-gray-300 flex-wrap">
        <div className="flex md:flex-col flex-wrap md:mr-10 justify-evenly md:justify-center w-full md:w-auto items-center">
          <Link href={socialsContent?.githubLink || '#'}>
            <a
              target="_blank"
              className="mt-3 w-48 flex justify-between p-3 pl-5 items-center rounded-full bg-black text-white dark:bg-gray-300 dark:text-gray-800"
            >
              <GithubIcon width={20} height={20} />
              {socialsContent?.githubTitle}
              <div></div>
            </a>
          </Link>

          <Link href={socialsContent?.twitterLink || '#'}>
            <a
              target="_blank"
              className="mt-3 w-48 flex justify-between p-3 pl-5 items-center rounded-full bg-blue-500 text-white"
            >
              <TwitterIcon width={20} height={20} />
              {socialsContent?.twitterTitle}
              <div></div>
            </a>
          </Link>

          <Link href={socialsContent?.instagramLink || '#'}>
            <a
              target="_blank"
              className="mt-3 w-48 flex justify-between p-3 pl-5 items-center rounded-full bg-pink-500 text-white"
            >
              <InstagramIcon width={20} height={20} />
              {socialsContent?.instagramTitle}
              <div></div>
            </a>
          </Link>

          <Link href={`mailto:${socialsContent?.emailAddress}`}>
            <a className="mt-3 w-48 flex justify-between p-3 pl-5 items-center rounded-full md:hidden bg-primary-500 text-white">
              <MailIcon width={20} height={20} />
              {socialsContent?.emailTitle}
              <div></div>
            </a>
          </Link>
        </div>

        <div className="w-72">
          <div className="text-gray-600 dark:text-gray-200 hidden md:flex flex-col justify-center h-full mt-5 md:mt-0 md:ml-10">
            <p className="font-bold">{props.preferAnEmailContent}</p>
            <p>{props.reachWithEmailContent}</p>
            <Link href={`mailto:${socialsContent?.emailAddress}`}>
              <a className="bg-primary-500 w-40 text-center text-white py-2 rounded-md mt-3 flex justify-between p-3 pl-5">
                <MailIcon width={20} height={20} />
                {socialsContent?.emailTitle}
                <div />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
