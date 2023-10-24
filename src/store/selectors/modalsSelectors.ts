import type { RootState } from '@store/index';

export const selectIsModalOpened = (state: RootState): boolean =>
  state.modals.isModalOpened;
export const selectIsSearchOpened = (state: RootState): boolean =>
  state.modals.isSearchOpened;
export const selectIsMenuOpened = (state: RootState): boolean =>
  state.modals.isMenuOpened;
