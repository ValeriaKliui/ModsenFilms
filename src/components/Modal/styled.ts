import styled from 'styled-components';
interface ModalProps {
  $isOpened: boolean;
}
export const ModalContainer = styled.div<ModalProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.$isOpened ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.videoBg};
`;
export const VideoContainer = styled.div``;
export const Video = styled.iframe``;
export const CloseIcon = styled.img`
  width: 20px;
`;
