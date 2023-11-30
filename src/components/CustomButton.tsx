interface CustomButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
  buttonType: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

function CustomButton({
  title,
  onClick,
  className,
  buttonType = 'button',
  disabled = false,
}: CustomButtonProps) {
  return (
    <button
      disabled={disabled}
      type={buttonType}
      onClick={onClick}
      className={className}
    >
      {title}
    </button>
  );
}

export default CustomButton;
