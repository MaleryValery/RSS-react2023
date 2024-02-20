import { MouseEvent, SyntheticEvent } from 'react';

interface ICustomButtonProps {
  title?: string;
  disabled?: boolean;
  className?: string;

  onClick: (
    event?: MouseEvent<HTMLElement> | SyntheticEvent
  ) => Promise<void> | void;
}
export default ICustomButtonProps;
