import { ChangeEvent } from 'react';

interface ICustomSelectProps {
  items: string[] | number[];
  value?: number;
  defaultValue?: string | number;
  classNameSelect?: string;
  classNameOpt?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default ICustomSelectProps;
