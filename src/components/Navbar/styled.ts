import { styled } from 'styled-components';
import { border, wrapper } from '@constants/styles/global';
import { devices } from '@constants/styles/media';
export const NavbarStyled = styled.nav`
  ${border}
`;
export const Container = styled.div`
  ${wrapper}
  display: flex;
  gap: ${({ theme }) => theme.gaps.gap16};
  justify-content: center;
  flex-wrap: wrap;
  @media ${devices.md} {
    gap: ${({ theme }) => theme.gaps.gap8};
  }
  @media ${devices.sm} {
    justify-content: flex-start;
  }
`;
