import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface ModalsState {
  isSearchOpened: boolean;
  isModalOpened: boolean;
}
const initialState: ModalsState = {
  isSearchOpened: false,
  isModalOpened: false,
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
  },
});

export const { setIsModalOpened, setIsSearchOpened } = modalsSlice.actions;
export const selectIsSearchOpened = (state: RootState): boolean => state.modals.isSearchOpened;
export const selectIsModalOpened = (state: RootState): boolean => state.modals.isModalOpened;

export default modalsSlice.reducer;
