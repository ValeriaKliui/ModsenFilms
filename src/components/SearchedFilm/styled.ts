import styled from 'styled-components';

export const SearchedFilmStyled = styled.li`
  display: flex;
  gap: 1em;
  border: 1px solid ${({ theme }) => theme.colors.borderDarker};
  border-collapse: collapse;
  justify-content: space-between;
  padding: 1em;
  width: 570px;
`;
export const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SearchedTitle = styled.h4``;
export const SearchedDetail = styled.p`
  -webkit-line-clamp: 5;
  display: block;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
`;
export const PosterSearched = styled.img`
  max-width: 120px;
  object-fit: contain;
`;
