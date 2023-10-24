import { type FC, memo } from 'react';
import noImage from '@assets/img/no-image.jpg';
import { type ISearchedFilmProps } from '@constants/types/interfaces';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { useModals } from '@hooks/useModals/useModals';
import { setMovieID } from '@store/slices/filmsSlice';

import {
  FilmInfo,
  PosterSuggested,
  SuggestedDetail,
  SuggestedFilmStyled,
  SuggestedTitle,
} from './styled';

export const SuggestedFilm: FC<ISearchedFilmProps> = memo(({ film }) => {
  const {
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    vote_average: voteAverage,
    overview = 'Description was not found',
    id,
  } = film;
  const dispatch = useAppDispatch();
  const { openModal } = useModals();

  const handleFilmClick = (): void => {
    if (id !== undefined) {
      dispatch(setMovieID(id));
      openModal();
    }
  };

  return (
    <SuggestedFilmStyled onClick={handleFilmClick} data-testid='suggested-film'>
      <FilmInfo>
        <SuggestedTitle>{title}</SuggestedTitle>
        <SuggestedDetail>{overview}</SuggestedDetail>
        {releaseDate != null && (
          <SuggestedDetail>
            Released: {new Date(releaseDate).getFullYear()}
          </SuggestedDetail>
        )}
        {voteAverage !== null && <SuggestedDetail>Rating: {voteAverage}</SuggestedDetail>}
      </FilmInfo>
      <PosterSuggested
        src={
          posterPath != null
            ? `${process.env.REACT_APP_TMDB_POSTER_LOW_URL}${posterPath}`
            : noImage
        }
        alt={title}
      ></PosterSuggested>
    </SuggestedFilmStyled>
  );
});
