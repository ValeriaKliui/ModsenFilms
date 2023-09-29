import styled from 'styled-components';
import { border, wrapper } from '../../constants/styles/global';
export const StyledHeader = styled.header`
  ${border}
`;
export const Container = styled.div`
  ${wrapper}
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;
