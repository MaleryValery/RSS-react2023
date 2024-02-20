import IBoxProps from './IBoxProps';

function Box({ className, children }: IBoxProps) {
  return <div className={className}>{children}</div>;
}

export default Box;
