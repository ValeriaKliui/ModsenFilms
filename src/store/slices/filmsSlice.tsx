import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type FilmsIState } from './interface';
import { type FilmI } from '../../utils/FilmsApi/types';
import { FILMS_LIMIT } from '../../constants/filmsConstants';

const initialState: FilmsIState = {
  filmsPerPage: FILMS_LIMIT,
  page: 1,
  filmsReceived: [],
  genre: null,
  searchQuery: '',
  movieID: null,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilmsPerPage: (state, action: PayloadAction<number>) => {
      state.filmsPerPage = state.filmsPerPage + action.payload;
    },
    increasePage: (state) => {
      state.page = state.page + 1;
    },
    setFilmsReceived: (state, action: PayloadAction<FilmI[]>) => {
      state.filmsReceived = [...state.filmsReceived, ...action.payload];
    },
    clearFilms: (state) => {
      state.filmsReceived = [];
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

export const { setFilmsPerPage, increasePage, setFilmsReceived, setGenre, clearFilms, setSearchQuery, setMovieID } =
  filmsSlice.actions;

export default filmsSlice.reducer;
