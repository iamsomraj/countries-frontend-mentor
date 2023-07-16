import { MoonIcon } from '@heroicons/react/24/outline';

type Props = {
  heading: string;
};

export default function NavBar({ heading }: Props) {
  return (
    <nav className="flex items-center justify-between border-b-light-mode-input bg-light-mode-background px-6 py-4 drop-shadow dark:bg-dark-mode-background">
      <h1 className="text-base font-extrabold text-light-mode-text dark:text-dark-mode-text">
        {heading}
      </h1>
      <ul>
        <li className="flex cursor-pointer items-center justify-center gap-4">
          <MoonIcon className="h-6 w-6 flex-shrink-0" />
          <span className="flex-shrink-0 font-semibold text-light-mode-text dark:text-dark-mode-text">
            Dark Mode
          </span>
        </li>
      </ul>
    </nav>
  );
}
