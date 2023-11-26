import { ChangeEvent, KeyboardEvent } from 'react';

interface CustomInputProps {
  value: string;
  className?: string;
  placeholder: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => Promise<void> | void;
}

function CustomInput(props: CustomInputProps) {
  const { value, placeholder, onChange, className, onKeyDown } = props;
  return (
    <div>
      <input
        value={value}
        placeholder={placeholder}
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={className}
      />
    </div>
  );
}

export default CustomInput;
