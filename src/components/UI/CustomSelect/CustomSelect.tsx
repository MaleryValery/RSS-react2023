import ICustomSelectProps from './ICustomSelectProps';

function CustomSelect(props: ICustomSelectProps) {
  const { items, defaultValue, classNameSelect, classNameOpt } = props;
  return (
    <select className={classNameSelect} defaultValue={defaultValue}>
      {items.map((item) => (
        <option key={Math.random()} className={classNameOpt}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
