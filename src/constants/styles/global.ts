import { createGlobalStyle, css } from 'styled-components';
import RobotoWoff from '../../assets/fonts/Roboto.woff';
import RobotoWoff2 from '../../assets/fonts/Roboto.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Roboto Condensed';
  src:
    url(${RobotoWoff2}) format('woff2'),
    url(${RobotoWoff}) format('woff');
}
html {
  height: 100%;
}
body {
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.background};
  font-family: 'Roboto Condensed';
  font-size: 16px;
  height: 100%;
}
#root {
  display: flex;
  flex-direction: column;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
*::before,
*::after {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}  
`;
export const wrapper = css`
  max-width: 1440px;
  padding: 1.3em 0;
  margin: 0 auto;
  width: 100%;
`;
export const border = css`
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;
