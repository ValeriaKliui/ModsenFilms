import { type ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../store/hooks/hooks';

interface useClickOutsideReturn {
  ref: React.RefObject<HTMLDivElement>;
  toIgnoreRef: React.RefObject<HTMLButtonElement>;
}
interface useClickOutsideProps {
  isOpened: boolean;
  setIsOpened: ActionCreatorWithPayload<boolean>;
}

export const useClickOutside = ({ isOpened, setIsOpened }: useClickOutsideProps): useClickOutsideReturn => {
  const ref = useRef<HTMLDivElement>(null);
  const toIgnoreRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();

  const handleClick = ({ target }: Event): void => {
    if (
      (ref.current !== null && !ref.current.contains(target as Node)) ||
      (toIgnoreRef.current !== null && toIgnoreRef.current.contains(target as Node))
    )
      dispatch(setIsOpened(false));
    else dispatch(setIsOpened(true));
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpened, ref, setIsOpened]);

  return { ref, toIgnoreRef };
};
