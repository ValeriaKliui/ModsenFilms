import { type ChangeEvent } from 'react';
import { type IFilm } from '../../FilmsApi/interface';
export interface useSearchI {
  searchQuery: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
  onClick: (films: IFilm[]) => void;
}
