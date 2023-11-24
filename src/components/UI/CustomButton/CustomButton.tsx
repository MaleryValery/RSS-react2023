import ICustomButtonProps from './ICustomButtonProps';

function CustomButton(props: ICustomButtonProps) {
  const { disabled, onClick, className, title } = props;

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={className}
    >
      {title}
    </button>
  );
}

export default CustomButton;
