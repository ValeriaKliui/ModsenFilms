import { type RootState } from '..';

export const selectIsSearchOpened = (state: RootState): boolean => state.modals.isSearchOpened;
export const selectIsModalOpened = (state: RootState): boolean => state.modals.isModalOpened;
export const selectIsMenuOpened = (state: RootState): boolean => state.modals.isMenuOpened;
