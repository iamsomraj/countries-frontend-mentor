import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { MouseEvent, useState } from 'react';

type Props = {
  placeholder: string;
  value: string;
  onOptionChange: (region: string) => void;
  options: string[];
};

export default function SingleSelect({
  value,
  options,
  onOptionChange,
  placeholder,
}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const btnText = value?.trim().length > 0 ? value.trim() : placeholder;

  const onDropdownToggle = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
  };

  const onOptionClick = (event: MouseEvent<HTMLButtonElement>, option: string) => {
    event.stopPropagation();
    onOptionChange(option);
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <button
      className="relative z-10 w-full rounded bg-dark-mode-text px-6 py-4 text-left text-light-mode-text drop-shadow-md transition-all duration-300 focus:outline-none dark:bg-dark-mode-elements dark:text-dark-mode-text lg:w-1/4 lg:px-8 lg:py-4"
      value={value}
      onClick={onDropdownToggle}
    >
      <div className="flex items-center justify-between">
        <span>{btnText}</span>
        <ChevronUpIcon
          className={`h-4 w-4 flex-shrink-0 transform transition-all duration-300 dark:stroke-dark-mode-text ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>
      {open && (
        <button
          onClick={(e) => e.stopPropagation()}
          className={
            'absolute left-0 top-[125%] flex w-full flex-col gap-2 rounded bg-dark-mode-text py-4 transition-all duration-300 dark:bg-dark-mode-elements'
          }
        >
          {options.map((option, index) => (
            <button
              key={option + index}
              value={option}
              className="w-full px-6 py-1 text-left outline-none hover:bg-light-mode-background dark:hover:bg-dark-mode-background"
              onClick={(e) => onOptionClick(e, option)}
            >
              {option}
            </button>
          ))}
        </button>
      )}
    </button>
  );
}
