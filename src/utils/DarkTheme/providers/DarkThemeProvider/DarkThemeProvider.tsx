import React, { ReactNode } from 'react';
import { useAppSelector } from '../../../../store/hooks/hooks';
import { selectTheme } from '../../../../store/slices/ThemeSlice';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../../../assets/styles/theme';

type Props = {
  children?: ReactNode;
};
export const DarkThemeProvider = ({ children }: Props) => {
  const darkThemeEnabled = useAppSelector(selectTheme);
  return <ThemeProvider theme={darkThemeEnabled.type === 'dark' ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};
