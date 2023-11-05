import ICustomSelectProps from './ICustomSelectProps';

function CustomSelect(props: ICustomSelectProps) {
  const { items, classNameSelect, classNameOpt, onChange, value } = props;
  return (
    <select className={classNameSelect} onChange={onChange} value={value}>
      {items.map((item) => (
        <option key={Math.random()} className={classNameOpt}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
