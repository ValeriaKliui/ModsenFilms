import type { RootState } from '@store/index';

export const selectTheme = (state: RootState) => state.theme.theme;
