import { FILMS_LIMIT } from '@constants/dataConstants/filmConstants';
import type { FilmsIState, IFilm } from '@constants/types/interfaces';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: FilmsIState = {
  filmsPerPage: FILMS_LIMIT,
  page: 1,
  films: [],
  genre: null,
  searchQuery: '',
  searchTitle: '',
  movieID: null,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilmsPerPage: (state, action: PayloadAction<number>) => {
      state.filmsPerPage = action.payload;
    },
    increasePage: state => {
      state.page = state.page + 1;
    },
    setFirstPage: state => {
      state.page = 1;
    },
    addFilms: (state, action: PayloadAction<IFilm[]>) => {
      state.films = [...state.films, ...action.payload];
    },
    clearFilms: state => {
      state.films = [];
    },
    setGenre: (state, action: PayloadAction<number | null>) => {
      state.genre = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSearchTitle: (state, action: PayloadAction<string>) => {
      state.searchTitle = action.payload;
    },
    setMovieID: (state, action: PayloadAction<number | null>) => {
      state.movieID = action.payload;
    },
  },
});

export const {
  setFilmsPerPage,
  increasePage,
  addFilms,
  setGenre,
  clearFilms,
  setSearchQuery,
  setMovieID,
  setFirstPage,
  setSearchTitle,
} = filmsSlice.actions;

export default filmsSlice.reducer;
