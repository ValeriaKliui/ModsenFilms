import styled from 'styled-components';
import { devices } from '../../constants/styles/media';
interface FilmsStyledProps {
  $isError: boolean;
}
export const FilmsStyled = styled.div<FilmsStyledProps>`
  display: ${(props) => (props.$isError ? 'block' : 'grid')};
  grid-template-columns: repeat(4, minmax(100px, 340px));
  gap: 2em;
  @media ${devices.lg} {
    grid-template-columns: repeat(3, minmax(150px, 340px));
    gap: 1em;
  }
  @media ${devices.sm} {
    grid-template-columns: repeat(1, minmax(150px, 340px));
    gap: 2em;
  }
`;
