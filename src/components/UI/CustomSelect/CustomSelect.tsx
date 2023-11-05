import ICustomSelectProps from './ICustomSelectProps';

function CustomSelect(props: ICustomSelectProps) {
  const { items, defaultValue, classNameSelect, classNameOpt, onChange } =
    props;
  return (
    <select
      className={classNameSelect}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {items.map((item) => (
        <option key={Math.random()} className={classNameOpt}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
