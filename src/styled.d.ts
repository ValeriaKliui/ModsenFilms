import 'styled-components';
import { type ITheme, type ThemeEnum } from './constants/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}
