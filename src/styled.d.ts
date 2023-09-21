import 'styled-components';
import { type ITheme, type ThemeEnum } from './assets/interfaces/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}
