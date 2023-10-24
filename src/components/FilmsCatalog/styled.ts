import styled from 'styled-components';
import { wrapper } from '@constants/styles/global';
import { devices } from '@constants/styles/media';

export const FilmsContainer = styled.div<{ $isError: boolean }>`
  ${wrapper};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.gap16};
  align-self: ${({ $isError }) => ($isError ? 'center' : 'flex-start')};
`;
export const FilmsStyled = styled.div<{ $isError: boolean }>`
  display: ${({ $isError }) => ($isError ? 'block' : 'grid')};
  grid-template-columns: repeat(4, minmax(100px, 340px));
  gap: ${({ theme }) => theme.gaps.gap32};
  @media ${devices.lg} {
    grid-template-columns: repeat(3, minmax(150px, 340px));
    gap: ${({ theme }) => theme.gaps.gap16};
  }
  @media ${devices.md} {
    grid-template-columns: repeat(2, minmax(150px, 340px));
    gap: ${({ theme }) => theme.gaps.gap16};
  }
  @media ${devices.sm} {
    grid-template-columns: repeat(1, minmax(150px, 500px));
    gap: ${({ theme }) => theme.gaps.gap32};
    justify-content: center;
  }
`;
