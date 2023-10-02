import styled from 'styled-components';
import { scaleAnimation } from '../../constants/styles/animation';

export const FilmStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  cursor: pointer;
  ${scaleAnimation}
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }
`;
export const Text = styled.p``;
export const Dot = styled.div`
  width: 3px;
  background-color: ${({ theme }) => theme.colors.font};
  height: 3px;
  border-radius: 100px;
`;
export const Preview = styled.img`
  width: 100%;
  max-height: 180px;
  object-fit: cover;
`;
export const Poster = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  object-fit: cover;
  object-position: top;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-content: center;
  gap: 1em;
  padding: 0.5em;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SubDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35em;
`;
