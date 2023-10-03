import { type ChangeEvent } from 'react';
import { type FilmI } from '../../FilmsApi/types';
export interface useSearchI {
  searchQuery: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
  onClick: (films: FilmI[]) => void;
}
