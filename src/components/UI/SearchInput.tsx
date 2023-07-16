import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChangeEvent } from 'react';

type Props = {
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({ value, onChange, placeholder }: Props) {
  return (
    <div className="flex w-full items-center justify-start gap-4 rounded bg-dark-mode-text px-6 py-4 drop-shadow-md dark:bg-dark-mode-elements lg:w-1/4 lg:px-8 lg:py-4">
      <MagnifyingGlassIcon className="h-4 w-4 flex-shrink-0 dark:stroke-dark-mode-text" />
      <input
        value={value}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 flex-shrink-0 text-base text-light-mode-text placeholder:text-light-mode-input focus:outline-none dark:bg-dark-mode-elements dark:text-dark-mode-text dark:placeholder:text-dark-mode-text"
      />
    </div>
  );
}
