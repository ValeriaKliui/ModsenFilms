import { type RefObject, useEffect, useRef } from 'react';

export const useClickOutside = (close: () => void): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current !== null && !ref.current.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [close]);

  return ref;
};
