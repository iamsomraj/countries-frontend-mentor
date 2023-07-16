import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

type Props = {
  heading: string;
};

export default function NavBar({ heading }: Props) {
  const isLightMode = true;
  return (
    <nav className="flex items-center justify-between border-b-light-mode-input bg-dark-mode-text px-20 py-6 drop-shadow transition-all duration-300 dark:bg-dark-mode-background">
      <h1 className="text-xl font-extrabold text-light-mode-text transition-all duration-300 dark:text-dark-mode-text">
        {heading}
      </h1>
      <ul>
        {isLightMode ? (
          <li className="flex cursor-pointer items-center justify-center gap-2">
            <MoonIcon className="h-6 w-6 flex-shrink-0" />
            <span className="flex-shrink-0 text-base font-semibold text-light-mode-text dark:text-dark-mode-text">
              Dark Mode
            </span>
          </li>
        ) : (
          <li className="flex cursor-pointer items-center justify-center gap-2">
            <SunIcon className="h-6 w-6 flex-shrink-0" />
            <span className="flex-shrink-0 text-base font-semibold text-light-mode-text transition-all duration-300 dark:text-dark-mode-text">
              Light Mode
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
}
