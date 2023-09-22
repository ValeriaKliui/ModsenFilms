import { type DefaultTheme } from 'styled-components';
import { ThemeEnum, type ITheme } from '../../utils/DarkTheme/providers/DarkThemeProvider/styled';

export const baseTheme: ITheme = {
    colors: {
        primary: '#ff8a00',
        secondary: '#0000001a',
        bg: '#ffffff',
        font: '#000000',
        fontActive: '#ffffff',
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
        bg: '#0f0f0f',
        font: '#E5E4E8',
        secondary: '#ffffff8a',
    },
};
