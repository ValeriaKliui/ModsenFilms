import { type ReactNode } from 'react';
import { useAppSelector } from '@hooks/reduxHooks/hooks';
import { selectTheme } from '@store/slices/themeSlice';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@constants/styles/theme';

interface DarkThemeProviderProps {
  children?: ReactNode;
}
export const DarkThemeProvider: React.FC<DarkThemeProviderProps> = ({ children }: DarkThemeProviderProps) => {
  const darkThemeEnabled = useAppSelector(selectTheme);
  return <ThemeProvider theme={darkThemeEnabled.type === 'dark' ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};
