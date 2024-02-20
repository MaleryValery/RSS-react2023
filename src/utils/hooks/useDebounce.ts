import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number = 300) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handlerDelay = setTimeout(() => setDebounce(value), delay);

    return () => clearTimeout(handlerDelay);
  }, [value, delay]);

  return debounce;
};

export default useDebounce;
