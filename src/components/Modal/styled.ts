import styled from 'styled-components';
import { transitionAnimation } from '@constants/styles/animation';
import { devices } from '@constants/styles/media';

export const ModalStyled = styled.div<{ $opened: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
  color: black;
  ${transitionAnimation}
  ${({ $opened }) =>
    ($opened ?? false) &&
    `
    pointer-events: auto;
    opacity: 1;
    z-index: 200;
  `}
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.videoBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 70vw;
  height: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  @media ${devices.sm} {
    width: 90vw;
    height: 50vw;
  }
`;
