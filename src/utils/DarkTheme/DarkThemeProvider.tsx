import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@constants/styles/theme';
import { type DarkThemeProviderProps } from '@constants/types/interfaces';
import { useAppSelector } from '@hooks/reduxHooks/hooks';

export const DarkThemeProvider: React.FC<DarkThemeProviderProps> = ({
  children,
}: DarkThemeProviderProps) => {
  const { theme: darkThemeEnabled } = useAppSelector(store => store.theme);

  return (
    <ThemeProvider theme={darkThemeEnabled.type === 'dark' ? darkTheme : lightTheme}>
      {typeof children !== 'undefined' && children}
    </ThemeProvider>
  );
};
