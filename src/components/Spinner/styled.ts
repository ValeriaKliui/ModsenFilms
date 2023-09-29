import styled from 'styled-components';
import { spin } from '../../constants/styles/animation';
interface SpinnerProps {
  $size: number;
}
export const SpinnerStyled = styled.div<SpinnerProps>`
  border: ${(props) => props.$size / 6}px solid ${({ theme }) => theme.colors.primary};
  border-top: ${(props) => props.$size / 6}px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  height: ${(props) => props.$size}px;
  width: ${(props) => props.$size}px;
  animation: ${spin} 1s linear infinite;
  margin: 2em auto;
  padding: 2em;
`;
