import { ChangeEvent } from 'react';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

export default function SingleSelect({ value, onChange, options }: Props) {
  return (
    <select
      className="flex w-full appearance-none items-center justify-start gap-4 rounded bg-dark-mode-text px-6 py-3 text-light-mode-text drop-shadow-md  focus:outline-none dark:bg-dark-mode-elements dark:text-dark-mode-text lg:w-1/4 lg:px-8 lg:py-4"
      value={value}
      onChange={onChange}
    >
      <option value="" selected>
        Filter by Region
      </option>
      {options.map((option, index) => (
        <option key={option + index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
