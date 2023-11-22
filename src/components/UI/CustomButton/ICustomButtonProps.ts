import { MouseEvent } from 'react';

interface ICustomButtonProps {
  title: string;
  disabled?: boolean;
  className?: string;
  onClick: (event?: MouseEvent<HTMLElement>) => Promise<void> | void;
}
export default ICustomButtonProps;
