import styled from 'styled-components';
import { hoverAnimation } from '../../constants/styles/animation';

interface GenreProps {
  $isActive: boolean;
}

export const GenreStyled = styled.div<GenreProps>`
  padding: 0.4em 1em;
  display: flex;
  align-content: center;
  background-color: ${(props) => (props.$isActive ? props.theme.colors.bgActive : props.theme.colors.secondary)};
  color: ${(props) => (props.$isActive ? props.theme.colors.fontActive : props.theme.colors.font)};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  ${hoverAnimation}
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgActive};
    color: ${({ theme }) => theme.colors.fontActive};
  }
`;
