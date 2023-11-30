interface CustomInputProps {
  placeholder?: string;
  onChange: () => void;
  className?: string;
  type?: string;
  id: string;
  label?: string;
  classLabel?: string;
  classInputBox?: string;
}

function CustomInput({
  id,
  classLabel,
  placeholder,
  onChange,
  className,
  type,
  label,
  classInputBox,
}: CustomInputProps) {
  return (
    <div className={classInputBox}>
      <label className={classLabel} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}

export default CustomInput;
