import styled from 'styled-components';
import { devices } from '../../constants/styles/media';

export const BurgerContainer = styled.div`
  display: none;
  @media ${devices.sm} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    gap: 6px;
    align-items: flex-end;
    cursor: pointer;
  }
`;
export const BurgerLine = styled.span<{ $isMenuOpened: boolean }>`
  z-index: 2000;
  background-color: ${({ theme }) => theme.colors.font};
  width: 30px;
  height: 2px;
  border-radius: 4px;
  &:first-child {
    transform: ${({ $isMenuOpened }) => ($isMenuOpened ? 'rotate(45deg) translate(5px, 6px);' : 'rotate(0)')};
  }

  &:nth-child(2) {
    opacity: ${({ $isMenuOpened }) => ($isMenuOpened ? '0' : '1')};
    transform: ${({ $isMenuOpened }) => ($isMenuOpened ? 'translateX(20px)' : 'translateX(0)')};
  }

  &:nth-child(3) {
    transform: ${({ $isMenuOpened }) => ($isMenuOpened ? 'rotate(-45deg) translate(5px, -6px);' : 'rotate(0)')};
  }
`;
