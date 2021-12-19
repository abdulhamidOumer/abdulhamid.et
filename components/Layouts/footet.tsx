import Image from 'next/image';
import Link from 'next/link';
import abdulhamidOumer from '../../assets/images/abdulhamid-oumer.jpeg';
import FacebookIcon from '../../assets/icons/facebook-brands.svg';
import InstagramIcon from '../../assets/icons/instagram-brands.svg';
import TwitterIcon from '../../assets/icons/twitter-square-brands.svg';
import LinkedInIcon from '../../assets/icons/linkedin-brands.svg';
import GithubIcon from '../../assets/icons/github-brands.svg';
import DevIcon from '../../assets/icons/dev-brands.svg';
import { ISocialsContent } from '../../utils/types';

interface IFooterProps {
  socialsContent?: ISocialsContent;
  fullName: string;
  jobTitle: string;
  currentJobStatus: string;
  companyName: string;
  siteMadeWith: string;
  hostedOn: string;
  codeOn: string;
  andContent: string;
}

const Footer = (props: IFooterProps) => {
  const socialsContent = props.socialsContent?.fields;

  const socials = [
    {
      name: socialsContent?.facebookTitle,
      icon: FacebookIcon,
      link: socialsContent?.facebookLink,
    },
    {
      name: socialsContent?.instagramTitle,
      icon: InstagramIcon,
      link: socialsContent?.instagramLink,
    },
    {
      name: socialsContent?.twitterTitle,
      icon: TwitterIcon,
      link: socialsContent?.twitterLink,
    },
    {
      name: socialsContent?.linkedInTitle,
      icon: LinkedInIcon,
      link: socialsContent?.linkedInLink,
    },
    {
      name: socialsContent?.githubTitle,
      icon: GithubIcon,
      link: socialsContent?.githubLink,
    },
    {
      name: socialsContent?.devTitle,
      icon: DevIcon,
      link: socialsContent?.devLink,
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 py-10 px-3 md:p-10 flex flex-wrap justify-between">
      <div className="flex flex-wrap md:mt-0 mt-3">
        <div className="rounded-full w-32 h-32">
          <Image
            className="rounded-full"
            src={abdulhamidOumer}
            width={'100%'}
            height={'100%'}
            layout="fixed"
          />
        </div>

        <div className="ml-3 md:ml-5">
          <h4 className="text-xl font-bold text-gray-600 dark:text-gray-100">
            {props.fullName}
          </h4>
          <p className="text-lg text-gray-600 dark:text-gray-200">
            {props.jobTitle}
          </p>

          <p className="text-sm w-80 max-w-full text-gray-400 dark:text-gray-200">
            {props.currentJobStatus}{' '}
            <Link href={socialsContent?.companyLink || ''}>
              <a className="text-purple-500" target="_blank">
                {props.companyName}
              </a>
            </Link>
          </p>
        </div>
      </div>

      <div className="w-80 max-w-full ml-3 md:mt-0 mt-3">
        <p className="text-gray-400 dark:text-gray-200 text-sm mt-2">
          {props.siteMadeWith}{' '}
          <span className="text-primary-500">
            <a
              href="https://nextjs.org/"
              className="text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
          </span>{' '}
          {props.andContent}{' '}
          <span className="text-primary-500">
            <a
              href="https://tailwindcss.com/"
              className="text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
          </span>
          . {props.hostedOn}{' '}
          <span className="text-primary-500">
            <a
              href="https://netlify.com/"
              className="text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </span>
          . {props.codeOn}{' '}
          <span className="text-primary-500">
            <a
              href="https://github.com/abdulhamidOumer/my-portfolio"
              className="text-primary-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </span>
        </p>
      </div>

      <div className="flex ml-3 md:mt-0 mt-3">
        {socials.map(social => (
          <Link href={social.link || '#'} key={social.name}>
            <a target="_blank">
              <social.icon className="w-8 h-8 mr-3 text-gray-500 dark:text-gray-200" />
            </a>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
