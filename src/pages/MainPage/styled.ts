import styled from 'styled-components';

export const Main = styled.main`
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
