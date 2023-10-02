import styled from 'styled-components';
import { scaleAnimation } from '../../constants/styles/animation';
import { border, wrapper } from '../../constants/styles/global';
import { devices } from '../../constants/styles/media';
export const StyledHeader = styled.header<{ $isMenuOpened: boolean }>`
  ${border}
  @media ${devices.sm} {
    overflow: ${({ $isMenuOpened }) => ($isMenuOpened ? 'hidden' : 'unset')};
  }
`;
export const Container = styled.div`
  ${wrapper}
  display:grid;
  grid-template-columns: 1fr 3fr 0.5fr;
  gap: 1em;
  align-items: center;
  @media ${devices.sm} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  ${scaleAnimation}
`;
export const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.font};
`;
export const Burger = styled.div`
  display: none;
  @media ${devices.sm} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    gap: 6px;
    align-items: flex-end;
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
