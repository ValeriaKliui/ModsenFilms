import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface ModalsState {
  isSearchOpened: boolean;
}
const initialState: ModalsState = {
  isSearchOpened: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsSearchOpened: (state, action: PayloadAction<boolean>) => {
      state.isSearchOpened = action.payload;
    },
  },
});

export const { setIsSearchOpened } = modalsSlice.actions;
export const selectIsSearchOpened = (state: RootState): boolean => state.modals.isSearchOpened;

export default modalsSlice.reducer;
