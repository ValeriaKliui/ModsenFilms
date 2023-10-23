import { createSlice,type PayloadAction } from '@reduxjs/toolkit';

import { type ModalsState } from './interface';

const initialState: ModalsState = {
  isSearchOpened: false,
  isModalOpened: false,
  isMenuOpened: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsSearchOpened: (state, action: PayloadAction<boolean>) => {
      state.isSearchOpened = action.payload;
    },
    setIsModalOpened: (state, action: PayloadAction<boolean>) => {
      state.isModalOpened = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpened = !state.isMenuOpened;
    },
  },
});

export const { setIsModalOpened, setIsSearchOpened, toggleMenu } = modalsSlice.actions;

export default modalsSlice.reducer;
