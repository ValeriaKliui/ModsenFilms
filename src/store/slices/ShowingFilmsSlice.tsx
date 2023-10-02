import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { type FilmI } from '../../utils/FilmsApi/types';

interface ShowingFilmsState {
  showingFilms: FilmI[];
  searchedFilms: FilmI[];
  page: number;
  genre: number | null;
  searchQuery: string;
  movieID: number | null;
}

const initialState: ShowingFilmsState = {
  showingFilms: [],
  searchedFilms: [],
  page: 1,
  genre: null,
  searchQuery: '',
  movieID: null,
};

export const showingFilmsSlice = createSlice({
  name: 'showingFilms',
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<FilmI[]>) => {
      state.showingFilms = action.payload;
    },
    displayMoreFilms: (state, action: PayloadAction<FilmI[]>) => {
      state.showingFilms = [...state.showingFilms, ...action.payload];
    },
    increasePage: (state) => {
      state.page = state.page + 1;
    },
    setFirstPage: (state) => {
      state.page = 1;
    },
    setGenre: (state, action: PayloadAction<number | null>) => {
      state.genre = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSearchedFilms: (state, action: PayloadAction<FilmI[]>) => {
      state.searchedFilms = action.payload;
    },
    setMovieID: (state, action: PayloadAction<number | null>) => {
      state.movieID = action.payload;
    },
  },
});

export const {
  increasePage,
  displayMoreFilms,
  setGenre,
  setFilms,
  setFirstPage,
  setSearchQuery,
  setSearchedFilms,
  setMovieID,
} = showingFilmsSlice.actions;

export const selectShowingFilms = (state: RootState): FilmI[] => state.showingFilms.showingFilms;
export const selectPage = (state: RootState): number => state.showingFilms.page;
export const selectGenre = (state: RootState): number | null => state.showingFilms.genre;
export const selectSearchQuery = (state: RootState): string => state.showingFilms.searchQuery;
export const selectMovieID = (state: RootState): number | null => state.showingFilms.movieID;

export default showingFilmsSlice.reducer;
