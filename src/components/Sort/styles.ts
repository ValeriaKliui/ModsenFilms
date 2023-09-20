import { styled } from 'styled-components';
export const Options = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
`;
export const Option = styled.div`
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 15px;
  cursor: pointer;
  &:hover {
  }
`;
