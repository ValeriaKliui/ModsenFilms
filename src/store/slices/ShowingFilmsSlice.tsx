import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { type FilmType } from '../../utils/FilmsApi/types';

interface ShowingFilmsState {
  showingFilms: FilmType[];
  searchedFilms: FilmType[];
  page: number;
  genre: number | null;
  searchQuery: string;
  isSearching: boolean;
}

const initialState: ShowingFilmsState = {
  showingFilms: [],
  searchedFilms: [],
  page: 1,
  genre: null,
  searchQuery: '',
  isSearching: false,
};

export const showingFilmsSlice = createSlice({
  name: 'showingFilms',
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<FilmType[]>) => {
      state.showingFilms = action.payload;
    },
    displayMoreFilms: (state, action: PayloadAction<FilmType[]>) => {
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
    setSearchedGilms: (state, action: PayloadAction<FilmType[]>) => {
      state.searchedFilms = action.payload;
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
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
  setSearchedGilms,
  setIsSearching,
} = showingFilmsSlice.actions;

export const selectShowingFilms = (state: RootState) => state.showingFilms.showingFilms;
export const selectPage = (state: RootState) => state.showingFilms.page;
export const selectGenre = (state: RootState) => state.showingFilms.genre;
export const selectSearchQuery = (state: RootState) => state.showingFilms.searchQuery;
export const selectIsSearching = (state: RootState) => state.showingFilms.isSearching;

export default showingFilmsSlice.reducer;
