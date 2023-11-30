interface CustomSelectProps {
  list: OptionType[];
  onChange: () => void;
  className?: string;
  classNameOpt?: string;
  id: string;
  classLabel?: string;
  classInputBox?: string;
  label?: string;
}

type OptionType = {
  key: string;
  value: string;
};

function CustomSelect({
  list,
  onChange,
  className,
  classNameOpt,
  classLabel,
  id,
  classInputBox,
  label,
}: CustomSelectProps) {
  return (
    <div className={classInputBox}>
      <label htmlFor={id} className={classLabel}>
        {label}
      </label>
      <select id={id} onChange={onChange} className={className}>
        {list.map((item) => {
          return (
            <option className={classNameOpt} key={item.key} value={item.value}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CustomSelect;
