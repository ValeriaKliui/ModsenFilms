import { type IFilm } from '@constants/types/interfaces';
import { type ChangeEvent } from 'react';

export interface useSearchI {
  searchQuery: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
  onClick: (films: IFilm[]) => void;
}
