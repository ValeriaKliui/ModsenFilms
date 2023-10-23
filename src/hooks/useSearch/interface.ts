import { type ChangeEvent } from 'react';

export interface useSearchI {
  searchQuery: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
  searchTitle: string;
  onClick: () => void;
}
