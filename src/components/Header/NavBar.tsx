import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import useTheme from '../../hooks/useTheme';

type Props = {
  heading: string;
};

export default function NavBar({ heading }: Props) {
  const { theme, setDarkTheme, removeDarkTheme } = useTheme();
  return (
    <nav className="flex items-center justify-between border-b-light-mode-input bg-dark-mode-text px-4 py-6 drop-shadow transition-all duration-300 dark:bg-dark-mode-elements lg:px-20">
      <h1 className="text-base font-extrabold  text-light-mode-text transition-all duration-300 dark:text-dark-mode-text lg:text-xl">
        {heading}
      </h1>
      <ul>
        {theme === '' ? (
          <button
            onClick={setDarkTheme}
            className="flex cursor-pointer items-center justify-center gap-2 outline-none"
          >
            <MoonIcon className="h-4 w-4 flex-shrink-0 lg:h-6 lg:w-6" />
            <span className="flex-shrink-0 text-sm font-semibold text-light-mode-text dark:text-dark-mode-text lg:text-base">
              Dark Mode
            </span>
          </button>
        ) : (
          <button
            onClick={removeDarkTheme}
            className="flex cursor-pointer items-center justify-center gap-2 outline-none"
          >
            <SunIcon className="h-4 w-4 flex-shrink-0 dark:stroke-dark-mode-text lg:h-6 lg:w-6" />
            <span className="flex-shrink-0 text-sm font-semibold text-light-mode-text transition-all duration-300 dark:text-dark-mode-text lg:text-base">
              Light Mode
            </span>
          </button>
        )}
      </ul>
    </nav>
  );
}
