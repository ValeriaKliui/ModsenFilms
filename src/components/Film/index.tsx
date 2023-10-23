import { type FC } from 'react';
import noImage from '@assets/img/no-image.jpg';
import { type IFilmProps } from '@constants/types/interfaces';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { useModals } from '@hooks/useModals/useModals';
import { setMovieID } from '@store/slices/filmsSlice';

import {
  Details,
  Dot,
  FilmStyled,
  InfoContainer,
  Poster,
  Preview,
  SubDetails,
  Text,
} from './styled';

export const Film: FC<IFilmProps> = ({ film }) => {
  const {
    backdrop_path: backdropPath,
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    vote_average: voteAverage,
    id,
  } = film;

  const dispatch = useAppDispatch();
  const { openModal } = useModals();
  const photoSrc = (src: string): string => {
    if (src === null) return noImage;
    else return `${process.env.REACT_APP_TMDB_POSTER_HIGH_URL}${src}`;
  };
  const handleFilmClick = (): void => {
    dispatch(setMovieID(id));
    openModal();
  };

  return (
    <FilmStyled onClick={handleFilmClick} data-testid='film-card'>
      <Preview src={photoSrc(backdropPath)} alt={title} data-testid='film-preview' />
      <InfoContainer>
        <Poster src={photoSrc(posterPath)} alt={title} data-testid='film-poster' />
        <Details>
          <Text data-testid='film-title'>{title}</Text>
          <SubDetails>
            {+releaseDate > 0 && (
              <>
                <Text>{new Date(releaseDate).getFullYear()}</Text>
                <Dot />
              </>
            )}
            <Text>Rating: {voteAverage}</Text>
          </SubDetails>
        </Details>
      </InfoContainer>
    </FilmStyled>
  );
};
