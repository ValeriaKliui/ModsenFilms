import { css, keyframes } from 'styled-components';

export const loading = keyframes`
 to {
    background-position-x: -20%;
  }
`;
export const spin = keyframes`
  0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
`;
export const scaleAnimation = css`
  transition: 0.2s ease-in-out all;
  &:hover {
    transform: scale(1.1);
  }
`;
export const hoverAnimation = css`
  transition: 0.2s ease all;
`;
