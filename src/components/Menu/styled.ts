import styled from 'styled-components';
import { devices } from '../../constants/styles/media';
interface MenuProps {
  $isOpened: boolean;
}
export const MenuStyled = styled.div<MenuProps>`
  display: ${(props) => (props.$isOpened ? 'flex' : 'none')};
  @media ${devices.sm} {
    padding: 1.5em;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    height: 105vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
`;
