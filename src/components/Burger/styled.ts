import { transitionAnimation } from '@constants/styles/animation';
import { devices } from '@constants/styles/media';
import styled from 'styled-components';

export const BurgerContainer = styled.div`
  display: none;
  @media ${devices.sm} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 20px;
    width: 40px;
    align-items: flex-end;
    justify-content: space-between;
    cursor: pointer;
    z-index: 150;
    justify-self: flex-end;
  }
`;
export const BurgerLine = styled.span<{ $isMenuOpened: boolean }>`
  ${transitionAnimation}
  background-color: ${({ theme }) => theme.colors.font};
  width: 35px;
  height: 2px;
  border-radius: 4px;
  &:first-child {
    transform: ${({ $isMenuOpened }) => ($isMenuOpened ? 'rotate(45deg) translate(5px, 6px);' : 'rotate(0)')};
  }

  &:nth-child(2) {
    opacity: ${({ $isMenuOpened }) => ($isMenuOpened ? '0' : '1')};
  }

  &:nth-child(3) {
    transform: ${({ $isMenuOpened }) => ($isMenuOpened ? 'rotate(-45deg) translate(5px, -6px);' : 'rotate(0)')};
  }
`;
