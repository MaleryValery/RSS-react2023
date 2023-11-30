import { ReactNode } from 'react';

interface CustomFormProps {
  className?: string;
  children: ReactNode;
  onSubmit?: () => void;
}

function CustomForm({ children, className, onSubmit }: CustomFormProps) {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default CustomForm;
