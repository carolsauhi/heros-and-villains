import { useEffect, useState } from 'react';

export default function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeout); // limpa o timeout se o valor mudar antes do tempo
  }, [value, delay]);

  return debouncedValue;
}
