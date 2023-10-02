import { styled } from 'styled-components';
import { border, wrapper } from '../../constants/styles/global';
import { devices } from '../../constants/styles/media';
export const Genres = styled.div`
  ${border}
`;
export const Container = styled.div`
  ${wrapper}
  display: flex;
  gap: 1em;
  justify-content: center;
  flex-wrap: wrap;
  @media ${devices.md} {
    gap: 0.5em;
  }
  @media ${devices.sm} {
    justify-content: flex-start;
  }
`;
