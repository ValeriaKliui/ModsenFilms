import { type DefaultTheme } from 'styled-components/dist/types';
import { darkTheme, lightTheme } from '@constants/styles/theme';
import { ThemeEnum, type ThemeState } from '@constants/types/interfaces';
import { createSlice } from '@reduxjs/toolkit';

const themeLocalStor = localStorage.getItem('theme');
const savedTheme: DefaultTheme =
  themeLocalStor != null ? JSON.parse(themeLocalStor) : lightTheme;

const initialState: ThemeState = {
  theme: savedTheme,
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
