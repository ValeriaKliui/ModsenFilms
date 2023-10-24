import { darkTheme, lightTheme, ThemeEnum } from '@constants/styles/theme';
import { createSlice } from '@reduxjs/toolkit';

import { type ThemeState } from './interface';

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
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
