import { type FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@constants/styles/theme';
import { type DarkThemeProviderProps } from '@constants/types/interfaces';
import { useAppSelector } from '@hooks/reduxHooks/hooks';
import { selectTheme } from '@store/selectors/themeSelectors';

export const DarkThemeProvider: FC<DarkThemeProviderProps> = ({
  children,
}: DarkThemeProviderProps) => {
  const darkThemeEnabled = useAppSelector(selectTheme);
  const currentTheme = darkThemeEnabled.type === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
