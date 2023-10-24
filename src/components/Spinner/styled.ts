import styled from 'styled-components';
import { spin } from '@constants/styles/animation';

export const SpinnerStyled = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.primary};
  border-top: 8px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 2em auto;
  padding: 2em;
`;
