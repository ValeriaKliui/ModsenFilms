export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    bg: string;
    font: string;
    fontActive: string;
  };
}
