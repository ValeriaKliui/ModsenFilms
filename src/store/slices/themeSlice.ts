import { type DefaultTheme } from 'styled-components/dist/types';
import { darkTheme, lightTheme } from '@constants/styles/theme';
import { ThemeEnum, type ThemeState } from '@constants/types/interfaces';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: ThemeState = {
  theme: lightTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme.type === ThemeEnum.light ? darkTheme : lightTheme;
    },
    setTheme: (state, action: PayloadAction<DefaultTheme>) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
