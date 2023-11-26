import { ChangeEvent } from 'react';

interface ICustomSelectProps {
  items: string[] | number[];
  value?: number;
  defaultValue?: string | number;
  classNameSelect?: string;
  classNameOpt?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function CustomSelect(props: ICustomSelectProps) {
  const { items, classNameSelect, classNameOpt, onChange, value } = props;

  return (
    <select className={classNameSelect} onChange={onChange} value={value}>
      {items.map((item) => (
        <option key={item} className={classNameOpt}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
