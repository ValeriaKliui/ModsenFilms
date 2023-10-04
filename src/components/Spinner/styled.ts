import styled from 'styled-components';
import { spin } from '../../constants/styles/animation';

export const SpinnerStyled = styled.div<{ $size: number }>`
  border: ${({ $size }) => $size / 6}px solid ${({ theme }) => theme.colors.primary};
  border-top: ${({ $size }) => $size / 6}px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  height: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
  animation: ${spin} 1s linear infinite;
  margin: 2em auto;
  padding: 2em;
`;
