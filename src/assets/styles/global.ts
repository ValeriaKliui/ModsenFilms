import { createGlobalStyle } from 'styled-components';
import RobotoWoff from '../fonts/Roboto.woff2';
import RobotoWoff2 from '../fonts/Roboto.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Roboto Condensed';
  src:
    url(${RobotoWoff2}) format('woff2'),
    url(${RobotoWoff}) format('woff');
}
body {
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.bg};
  font-family: 'Roboto Condensed';
  font-size: 16px;
}
#root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
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
