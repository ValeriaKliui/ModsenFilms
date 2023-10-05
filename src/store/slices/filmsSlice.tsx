import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type FilmsIState } from './interface';
import { FILMS_LIMIT } from '@constants/filmsConstants';
import { type IFilm } from '@constants/types/interfaces';

const initialState: FilmsIState = {
  filmsPerPage: FILMS_LIMIT,
  page: 1,
  films: [],
  genre: null,
  searchQuery: '',
  movieID: null,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilmsPerPage: (state, action: PayloadAction<number>) => {
      state.filmsPerPage = action.payload;
    },
    increasePage: (state) => {
      state.page = state.page + 1;
    },
    setFirstPage: (state) => {
      state.page = 1;
    },
    setFilms: (state, action: PayloadAction<IFilm[]>) => {
      state.films = [...state.films, ...action.payload];
    },
    clearFilms: (state) => {
      state.films = [];
    },
    setGenre: (state, action: PayloadAction<number | null>) => {
      state.genre = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setMovieID: (state, action: PayloadAction<number | null>) => {
      state.movieID = action.payload;
    },
  },
});

export const {
  setFilmsPerPage,
  increasePage,
  setFilms,
  setGenre,
  clearFilms,
  setSearchQuery,
  setMovieID,
  setFirstPage,
} = filmsSlice.actions;

export default filmsSlice.reducer;
