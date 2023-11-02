import ICustomButtonProps from './ICustomButtonProps';

function CustomButton(props: ICustomButtonProps) {
  const { disabled, children, onClick, className } = props;
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default CustomButton;
