import { ChangeEvent } from 'react';

interface ICustomSelectProps {
  items: string[] | number[];
  value?: string;
  defaultValue?: string | number;
  classNameSelect?: string;
  classNameOpt?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default ICustomSelectProps;
