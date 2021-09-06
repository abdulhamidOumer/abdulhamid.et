import Link from 'next/link';
import Switch from '@bit/mui-org.material-ui.switch';
import PopOver from '@bit/mui-org.material-ui.popover';
import { withStyles } from '@bit/mui-org.material-ui.styles';
import GlobeIcon from '../../assets/icons/globe.svg';
import SunIcon from '../../assets/icons/sun.svg';
import MoonIcon from '../../assets/icons/moon-solid.svg';
import customizedConfig from '../../tailwind.config';
import { IMenuItemContent } from '../../utils/types';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

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
}

const Header = (props: IHeaderProps) => {
  const { asPath } = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isPopOverOpen, setPopOverOpen] = useState(false);

  const togglePopover = () => {
    setPopOverOpen(!isPopOverOpen);
  };

  return (
    <header className="bg-white flex justify-between items-center px-7 py-1 w-full">
      <div className="">
        <h1 className="text-xl font-bold text-gray-700">{props.title}.</h1>
      </div>

      <nav>
        <ul className="flex justify-evenly">
          {props.menus.map((item, index) => (
            <li
              key={item?.fields?.routeHash || `menu-${index}`}
              className="px-5 py-5 font-bold text-sm"
            >
              <Link href={item.fields?.routeHash || '#'}>
                <a className="text-gray-500">{item.fields?.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex">
        <button className="bg-primary-500 text-white px-6 h-8 text-sm rounded-full hover:bg-primary-600">
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
          <div className="p-3 flex flex-col">
            <Link href={asPath} locale="am">
              <a
                className={`p-2 text-sm ${
                  props.currentLocale === 'am'
                    ? 'text-primary-500 font-bold'
                    : ''
                }`}
              >
                Amharic (አማርኛ)
              </a>
            </Link>
            <Link href={asPath} locale="en-US">
              <a
                className={`p-2 text-sm ${
                  props.currentLocale === 'en-US'
                    ? 'text-primary-500 font-bold'
                    : ''
                }`}
              >
                English (US)
              </a>
            </Link>
          </div>
        </PopOver>

        <div className="ml-2">
          <PurpleSwitch
            value
            icon={
              <div className="rounded-full p-0.5 bg-primary-300">
                <SunIcon className="text-primary-500" height={18} width={18} />
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
  );
};

export default Header;
