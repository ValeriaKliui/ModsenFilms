import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface ModalsState {
  isSearchOpened: boolean;
  isModalOpened: boolean;
  isMenuOpened: boolean;
}
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
export const selectIsSearchOpened = (state: RootState): boolean => state.modals.isSearchOpened;
export const selectIsModalOpened = (state: RootState): boolean => state.modals.isModalOpened;
export const selectIsMenuOpened = (state: RootState): boolean => state.modals.isMenuOpened;

export default modalsSlice.reducer;
