import { styled } from 'styled-components';
import { scaleAnimation } from '../../constants/styles/animation';
export const ButtonStyled = styled.button`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightest};
  font-family: inherit;
  font-weight: 600;
  font-size: inherit;
  padding: 1em 2em;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  ${scaleAnimation}
`;
