import { styled } from 'styled-components';
import { scaleAnimation } from '@constants/styles/animation';

export const ButtonStyled = styled.button<{ $isHidden?: boolean }>`
  display: ${({ $isHidden = false }) => $isHidden && 'none'};
  align-self: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightest};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: inherit;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  ${scaleAnimation}
`;
