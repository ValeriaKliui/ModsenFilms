import styled from 'styled-components';

interface GenreProps {
  $isActive: boolean;
}

export const GenreStyled = styled.div<GenreProps>`
  padding: 0.5em 1em;
  background-color: ${(props) => (props.$isActive ? 'blue' : 'red')};
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgDark};
    color: ${({ theme }) => theme.colors.fontActive};
  }
`;
