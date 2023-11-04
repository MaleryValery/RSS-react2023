import { ChangeEvent, KeyboardEvent } from 'react';

interface CustomInputProps {
  value: string;
  className?: string;
  placeholder: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => Promise<void> | void;
}

export default CustomInputProps;
