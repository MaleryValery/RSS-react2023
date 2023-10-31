import { MouseEvent } from 'react';

interface ICustomButtonProps {
  disabled: boolean;
  children?: string | string[];
  onClick: (event?: MouseEvent<HTMLElement>) => Promise<void> | void;
}
export default ICustomButtonProps;
