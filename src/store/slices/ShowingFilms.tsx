import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { FilmType } from '../../utils/FilmsApi/types';
import { FILM_LOADING_AMOUNT } from '../../constants/constants';

interface ShowingFilmsState {
  showingFilms: FilmType[];
  step: number;
  page: number;
}

const initialState: ShowingFilmsState = {
  showingFilms: [],
  step: -1,
  page: 1,
};

export const showingFilmsSlice = createSlice({
  name: 'showingFilms',
  initialState,
  reducers: {
    addShowingFilms: (state, action: PayloadAction<FilmType[]>) => {
      state.showingFilms = [
        ...state.showingFilms,
        ...action.payload.slice(
          state.step === 0 ? 0 : state.step * FILM_LOADING_AMOUNT,
          state.step === 0 ? FILM_LOADING_AMOUNT : (state.step + 1) * FILM_LOADING_AMOUNT,
        ),
      ];
      state.step = state.step > 1 ? 0 : state.step + 1;
    },
    increasePage: (state) => {
      state.page = state.page + 1;
    },
  },
});

export const { addShowingFilms, increasePage } = showingFilmsSlice.actions;

export const selectShowingFilms = (state: RootState) => state.showingFilms.showingFilms;
export const selectPage = (state: RootState) => state.showingFilms.page;
export const selectStep = (state: RootState) => state.showingFilms.step;

export default showingFilmsSlice.reducer;
