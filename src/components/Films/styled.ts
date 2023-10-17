import styled from 'styled-components';
import { devices } from '@constants/styles/media';
import { wrapper } from '@constants/styles/global';

export const FilmsContainer = styled.div<{ $isError: boolean }>`
  ${wrapper};
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-self: ${({ $isError }) => ($isError ? 'center' : 'flex-start')};
`;
export const FilmsStyled = styled.div<{ $isError: boolean }>`
  display: ${({ $isError }) => ($isError ? 'block' : 'grid')};
  grid-template-columns: repeat(4, minmax(100px, 340px));
  gap: 2em;
  @media ${devices.lg} {
    grid-template-columns: repeat(3, minmax(150px, 340px));
    gap: 1em;
  }
  @media ${devices.md} {
    grid-template-columns: repeat(2, minmax(150px, 340px));
    gap: 1em;
  }
  @media ${devices.sm} {
    grid-template-columns: repeat(1, minmax(150px, 500px));
    gap: 2em;
    justify-content: center;
  }
`;
