import styled from 'styled-components';

export const FilmStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const Text = styled.p``;
export const Dot = styled.div`
  width: 3px;
  background-color: ${({ theme }) => theme.colors.font};
  height: 3px;
  border-radius: 100px;
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
