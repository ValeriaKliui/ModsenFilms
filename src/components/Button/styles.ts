import { styled } from 'styled-components';
export const ButtonStyled = styled.button`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.fontActive};
  font-family: inherit;
  font-size: inherit;
  padding: 0.7em 2em;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
