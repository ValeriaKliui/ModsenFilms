import styled from 'styled-components';
import { scaleAnimation } from '../../constants/styles/animation';
import { border, wrapper } from '../../constants/styles/global';
export const StyledHeader = styled.header`
  ${border}
`;
export const Container = styled.div`
  ${wrapper}
  display: flex;
  justify-content: space-between;
  align-items: center;
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
