import { MouseEvent } from 'react';

type ButtonWithIcon = {
  text: string;
  withIcon: true;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

type ButtonWithOutIcon = {
  text: string;
  withIcon: false;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

type Props = ButtonWithIcon | ButtonWithOutIcon;

export default function Button(props: Props) {
  const { text, withIcon, onClick } = props;

  if (withIcon) {
    const { icon: IconElement } = props;
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-2 rounded bg-dark-mode-text px-6 py-3 text-base text-light-mode-text outline-none drop-shadow-md dark:bg-dark-mode-elements dark:text-dark-mode-text"
      >
        <IconElement className="h-4 w-4 flex-shrink-0 dark:stroke-dark-mode-text" />
        {text}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded bg-dark-mode-text px-6 py-3 text-base text-light-mode-text outline-none drop-shadow-md dark:bg-dark-mode-elements dark:text-dark-mode-text"
    >
      {text}
    </button>
  );
}
