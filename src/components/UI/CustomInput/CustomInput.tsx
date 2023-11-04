import CustomInputProps from './CustomInputProps';

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
