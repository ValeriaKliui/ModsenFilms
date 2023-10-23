import { transitionAnimation } from '@constants/styles/animation';
import styled from 'styled-components';

export const GenreStyled = styled.div<{ $isActive: boolean }>`
  padding: 0.4em 1em;
  display: flex;
  align-content: center;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.bgActive : theme.colors.secondary)};
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.fontActive : theme.colors.font)};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  ${transitionAnimation}
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgActive};
    color: ${({ theme }) => theme.colors.fontActive};
  }
`;
