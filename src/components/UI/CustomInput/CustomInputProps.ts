import { ChangeEvent } from 'react';

interface CustomInputProps {
  value: string;
  className?: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void> | void;
}

export default CustomInputProps;
