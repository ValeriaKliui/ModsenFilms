import styled from 'styled-components';
import { wrapper } from '@styles/global';

export const Main = styled.main`
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  ${wrapper};
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
