import styled from 'styled-components';

export const SuggestedFilmStyled = styled.li`
  display: flex;
  gap: ${({ theme }) => theme.gaps.gap16};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-collapse: collapse;
  justify-content: space-between;
  padding: 16px;
`;
export const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SuggestedTitle = styled.h4``;
export const SuggestedDetail = styled.p`
  -webkit-line-clamp: 4;
  display: block;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
`;
export const PosterSuggested = styled.img`
  max-width: 120px;
  object-fit: contain;
`;
