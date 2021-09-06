import Link from 'next/link';
import Switch from '@bit/mui-org.material-ui.switch';
import PopOver from '@bit/mui-org.material-ui.popover';
import { withStyles } from '@bit/mui-org.material-ui.styles';
import GlobeIcon from '../../assets/icons/globe.svg';
import SunIcon from '../../assets/icons/sun.svg';
import MoonIcon from '../../assets/icons/moon-solid.svg';
import CheckIcon from '../../assets/icons/check-circle.svg';
import CircleIcon from '../../assets/icons/circle.svg';
import MenuIcon from '../../assets/icons/menu.svg';
import customizedConfig from '../../tailwind.config';
import { IMenuItemContent } from '../../utils/types';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';
import { EThemes } from '../../utils/constants';
import MobileHeader from './header.mobile';

const primary = customizedConfig.theme.extend.colors.primary;

const PurpleSwitch = withStyles({
  switchBase: {
    color: primary[300],
    '&$checked': {
      color: primary[500],
    },
    '&$checked + $track': {
      backgroundColor: primary[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

interface IHeaderProps {
  menus: IMenuItemContent[];
  title: string;
  letsTalkLabel: string;
  currentLocale: string;
  currentRoute: string;
  currentTheme: EThemes;
  onChangeTheme: (theme: EThemes) => void;
}

const Header = (props: IHeaderProps) => {
  const { asPath } = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const headerElement = useRef<HTMLHeadElement>(null);

  const [isPopOverOpen, setPopOverOpen] = useState(false);

  const togglePopover = () => {
    setPopOverOpen(!isPopOverOpen);
  };

  const onCloseMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  const onOpenMobileMenu = () => {
    setMobileMenuVisible(true);
  };

  const toggleTheme = () => {
    props.onChangeTheme(
      props.currentTheme === EThemes.light ? EThemes.dark : EThemes.light,
    );
  };

  const checkIfScrolled = () => {
    if (!mobileMenuVisible && window.pageYOffset > 100) {
      headerElement?.current?.classList.add('shadow-md');
    } else if (!mobileMenuVisible && window.pageYOffset <= 100) {
      headerElement?.current?.classList.remove('shadow-md');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkIfScrolled);
    return () => {
      window.removeEventListener('scroll', checkIfScrolled);
    };
  }, []);

  return (
    <>
      <MobileHeader
        currentRoute={props.currentRoute}
        isOpen={mobileMenuVisible}
        menus={props.menus}
        onClose={onCloseMobileMenu}
      />
      <header
        ref={headerElement}
        className="bg-white dark:bg-gray-900 flex justify-between items-center px-7 py-1 w-full fixed z-20"
      >
        <div className="flex items-center text-gray-700 dark:text-white">
          <button className="block lg:hidden" onClick={onOpenMobileMenu}>
            <MenuIcon />
          </button>

          <h1 className="py-5 text-xl font-bold ml-5 lg:ml-0">
            {props.title}.
          </h1>
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex justify-evenly">
            {props.menus.map((item, index) => (
              <li
                key={item?.fields?.routeHash || `menu-${index}`}
                className="px-5 py-5 font-bold text-sm"
              >
                <Link href={item.fields?.routeHash || '#'}>
                  <a
                    className={`${
                      props.currentRoute === item.fields?.routeHash
                        ? 'text-primary-500'
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

        <div className="flex items-center">
          <button className="hidden md:block bg-primary-500 text-white px-6 h-8 text-sm rounded-full hover:bg-primary-600">
            {props.letsTalkLabel}
          </button>

          <button onClick={togglePopover} ref={setAnchorEl}>
            <GlobeIcon className="text-primary-500 ml-3" />
          </button>

          <PopOver
            anchorEl={anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            open={isPopOverOpen}
            onClose={togglePopover}
          >
            <div className="p-3 flex flex-col dark:bg-gray-800 dark:text-white">
              <Link href={asPath} locale="am">
                <a
                  className={`p-2 flex items-center text-sm ${
                    props.currentLocale === 'am'
                      ? 'text-primary-500 font-bold'
                      : ''
                  }`}
                >
                  {props.currentLocale === 'am' ? (
                    <CheckIcon className="mr-3" />
                  ) : (
                    <CircleIcon className="mr-3" />
                  )}
                  Amharic (አማርኛ)
                </a>
              </Link>
              <Link href={asPath} locale="en-US">
                <a
                  className={`flex items-center p-2 text-sm ${
                    props.currentLocale === 'en-US'
                      ? 'text-primary-500 font-bold'
                      : ''
                  }`}
                >
                  {props.currentLocale === 'en-US' ? (
                    <CheckIcon className="mr-3" />
                  ) : (
                    <CircleIcon className="mr-3" />
                  )}
                  English (US)
                </a>
              </Link>
            </div>
          </PopOver>

          <div className="ml-2">
            <PurpleSwitch
              // @ts-ignore: Unreachable code error - bitly have issue saying checked is not a valid property
              checked={props.currentTheme === EThemes.dark}
              onChange={toggleTheme}
              icon={
                <div className="rounded-full p-0.5 bg-primary-300">
                  <SunIcon
                    className="text-primary-500"
                    height={18}
                    width={18}
                  />
                </div>
              }
              checkedIcon={
                <div className="rounded-full p-0.5 bg-primary-500">
                  <MoonIcon className="text-white" height={15} width={15} />
                </div>
              }
            />
          </div>
        </div>

        {/*  */}
      </header>
    </>
  );
};

export default Header;
