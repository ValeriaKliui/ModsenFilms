import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { type FilmType } from '../../utils/FilmsApi/types';

interface ShowingFilmsState {
  showingFilms: FilmType[];
  newFilms: FilmType[];
  page: number;
  genre: string | null;
}

const initialState: ShowingFilmsState = {
  showingFilms: [],
  newFilms: [],
  page: 1,
  genre: null,
};

export const showingFilmsSlice = createSlice({
  name: 'showingFilms',
  initialState,
  reducers: {
    increasePage: (state) => {
      state.page = state.page + 1;
    },
    setMoviesInitial: (state, action: PayloadAction<FilmType[]>) => {
      state.showingFilms = action.payload;
    },
    displayMoreFilms: (state, action: PayloadAction<FilmType[]>) => {
      state.showingFilms = [...state.showingFilms, ...action.payload];
    },
    chooseGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setFilms: (state, action: PayloadAction<FilmType[]>) => {
      state.showingFilms = action.payload;
    },
    setNewFilms: (state, action: PayloadAction<FilmType[]>) => {
      state.newFilms = action.payload;
    },
  },
});

export const { increasePage, displayMoreFilms, setMoviesInitial, chooseGenre, setFilms, setNewFilms } =
  showingFilmsSlice.actions;

export const selectShowingFilms = (state: RootState) => state.showingFilms.showingFilms;
export const selectPage = (state: RootState) => state.showingFilms.page;
export const selectGenre = (state: RootState) => state.showingFilms.genre;
export const selectNewFilms = (state: RootState) => state.showingFilms.newFilms;

export default showingFilmsSlice.reducer;
