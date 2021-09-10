import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';
import CloseIcon from '../../assets/icons/x.svg';
import { IMenuItemContent } from '../../utils/types';

interface IMobileHeaderProps {
  menus: IMenuItemContent[];
  currentRoute: string;
  isOpen: boolean;
  onClose: () => void;
}

const MobileHeader = (props: IMobileHeaderProps) => {
  useEffect(() => {
    Router.events.on('routeChangeComplete', props.onClose);
    Router.events.on('hashChangeComplete', props.onClose);

    return () => {
      Router.events.off('routeChangeComplete', props.onClose);
      Router.events.off('hashChangeComplete', props.onClose);
    };
  }, []);

  return props.isOpen ? (
    <div className="z-30 w-full h-full bg-white dark:bg-gray-700 p-7 fixed">
      <div className="flex items-center justify-between text-gray-800 dark:text-white">
        <button onClick={props.onClose}>
          <CloseIcon />
        </button>
      </div>

      <nav className="flex w-full mt-5">
        <ul className="flex flex-col min-h-full bg-red justify-center">
          {props.menus.map((item, index) => (
            <li
              key={item?.fields?.routeHash || `menu-${index}`}
              className="py-5 text-xl"
            >
              <Link href={'/' + item.fields?.routeHash || '#'}>
                <a
                  className={`${
                    props.currentRoute === item.fields?.routeHash
                      ? 'text-primary-500 text-4xl'
                      : 'text-gray-500 dark:text-gray-300'
                  }`}
                >
                  {item.fields?.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  ) : null;
};

export default MobileHeader;
