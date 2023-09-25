import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { type FilmType } from '../../utils/FilmsApi/types';

interface ShowingFilmsState {
  showingFilms: FilmType[];
  page: number;
  genre: number | null;
}

const initialState: ShowingFilmsState = {
  showingFilms: [],
  page: 1,
  genre: null,
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
  },
});

export const { increasePage, displayMoreFilms, setGenre, setFilms, setFirstPage } = showingFilmsSlice.actions;

export const selectShowingFilms = (state: RootState) => state.showingFilms.showingFilms;
export const selectPage = (state: RootState) => state.showingFilms.page;
export const selectGenre = (state: RootState) => state.showingFilms.genre;

export default showingFilmsSlice.reducer;
