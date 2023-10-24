import { type DefaultTheme } from 'styled-components';
import type { ITheme } from '@constants/types/interfaces';
import { ThemeEnum } from '@constants/types/interfaces';

export const baseTheme: ITheme = {
  colors: {
    primary: '#ff8a00',
    secondary: '#0000000f',
    background: '#ffffff',
    font: '#19191B',
    fontActive: '#ffffff',
    bgActive: '#000000',
    border: '#C4C4C4',
    videoBg: '#00000099',
    shadow: '4px 4px 8px 0px #223c5033',
    lightest: '#ffffff',
    copyright: '#00000066',
  },
  fontSizes: {
    medium: '14px',
    large: '16px',
  },
  fontWeight: {
    semibold: 600,
    bold: 700,
  },
  gaps: {
    gap4: '4px',
    gap8: '8px',
    gap16: '16px',
    gap32: '32px',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    background: '#0f0f0f',
    font: '#E5E4E8',
    secondary: '#272727',
    bgActive: '#ffffff',
    fontActive: '#000000',
    border: '#383838',
    copyright: '#ffffff66',
  },
};
