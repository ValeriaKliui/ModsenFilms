import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@constants/styles/theme';
import { type DarkThemeProviderProps } from '@constants/types/interfaces';
import { useAppSelector } from '@hooks/reduxHooks/hooks';
import { selectTheme } from '@store/selectors/themeSelectors';

export const DarkThemeProvider: React.FC<DarkThemeProviderProps> = ({
  children,
}: DarkThemeProviderProps) => {
  const darkThemeEnabled = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={darkThemeEnabled.type === 'dark' ? darkTheme : lightTheme}>
      {typeof children !== 'undefined' && children}
    </ThemeProvider>
  );
};
