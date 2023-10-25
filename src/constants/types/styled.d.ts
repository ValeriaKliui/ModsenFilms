import 'styled-components';

import type { ITheme, ThemeEnum } from './interfaces';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
  }
}
