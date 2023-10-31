import ICustomButtonProps from './ICustomButtonProps';

function CustomButton(props: ICustomButtonProps) {
  const { disabled, children, onClick } = props;
  return (
    <button disabled={disabled} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;
