import Link from 'next/link';
import Switch from '@bit/mui-org.material-ui.switch';
import colors from 'tailwindcss/colors';
import { withStyles } from '@bit/mui-org.material-ui.styles';
import GlobeIcon from '../../assets/icons/globe.svg';
import SunIcon from '../../assets/icons/sun.svg';
import MoonIcon from '../../assets/icons/moon-solid.svg';
import customizedConfig from '../../tailwind.config';

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

const Header = () => {
  return (
    <header className="bg-white flex justify-between items-center px-7 py-1 fixed w-full">
      <div className="">
        <h1 className="text-xl font-bold text-gray-700">Abdulhamid.</h1>
      </div>

      <nav>
        <ul className="flex justify-evenly">
          <li className="px-5 py-5 font-bold text-sm">
            <Link href="/">
              <a className="text-gray-700">Home</a>
            </Link>
          </li>

          <li className="px-5 py-5 font-bold text-sm">
            <Link href="/">
              <a className="text-gray-500">About</a>
            </Link>
          </li>

          <li className="px-5 py-5 font-bold text-sm">
            <Link href="/">
              <a className="text-gray-500">Works</a>
            </Link>
          </li>

          <li className="px-5 py-5 font-bold text-sm">
            <Link href="/">
              <a className="text-gray-500">Blogs</a>
            </Link>
          </li>

          <li className="px-5 py-5 font-bold text-sm">
            <Link href="/">
              <a className="text-gray-500">Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex">
        <button className="bg-primary-500 text-white px-6 h-8 text-sm rounded-full font-medium hover:bg-primary-600">
          Lets Talk
        </button>

        <button>
          <GlobeIcon className="text-primary-500 ml-3" />
        </button>

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
