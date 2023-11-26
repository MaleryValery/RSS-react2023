import { MouseEvent } from 'react';

interface ICustomButtonProps {
  title: string;
  disabled?: boolean;
  className?: string;
  onClick: (
    event?: MouseEvent<HTMLElement>
  ) => Promise<void> | Promise<boolean> | void;
}

function CustomButton(props: ICustomButtonProps) {
  const { disabled, onClick, className, title } = props;

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={className}
    >
      {title}
    </button>
  );
}

export default CustomButton;
