import 'styled-components';
import { type ITheme, type ThemeEnum } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}
