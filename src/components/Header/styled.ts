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
