import styled from 'styled-components';
interface ModalProps {
  $opened?: boolean;
}
export const ModalStyled = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
  color: black;
  ${({ $opened }) =>
    ($opened ?? false) &&
    `
    pointer-events: auto;
    opacity: 1;
    z-index: 100;
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
`;
