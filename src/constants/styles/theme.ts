import { type DefaultTheme } from 'styled-components';

export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    font: string;
    fontActive: string;
    bgActive: string;
    border: string;
    videoBg: string;
    shadow: string;
    lightest: string;
  };
}

export const baseTheme: ITheme = {
  colors: {
    primary: '#ff8a00',
    secondary: 'rgba(0, 0, 0, 0.06)',
    background: '#ffffff',
    font: '#000000',
    fontActive: '#ffffff',
    bgActive: '#000000',
    border: '#C4C4C4',
    videoBg: 'rgba(0, 0, 0, 0.6)',
    shadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
    lightest: '#ffffff',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
    font: '#19191B',
  },
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
  },
};
