import { FilmStyled, Poster, Text, InfoContainer, Details, SubDetails, Dot, Preview } from './styled';
import noImage from '@assets/img/no-image.jpg';
import { SkeletonLoader } from '@components/SkeletonLoader/SkeletonLoader';
import { type FC } from 'react';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { useModals } from '@hooks/useModals/useModals';
import { setMovieID } from '@store/slices/filmsSlice';
import { type IFilmProps } from '@constants/types/interfaces';

export const Film: FC<IFilmProps> = ({ film, isFetching }) => {
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
    else return `https://image.tmdb.org/t/p/w300${src}`;
  };
  const handleFilmClick = (): void => {
    dispatch(setMovieID(id));
    openModal();
  };

  if (isFetching !== undefined && isFetching) return <SkeletonLoader />;

  return (
      <div data-testid="film-card">
          <FilmStyled onClick={handleFilmClick}>
              <Preview src={photoSrc(backdropPath)} alt={title} />
              <InfoContainer>
                  <Poster src={photoSrc(posterPath)} alt={title} />
                  <Details>
                      <Text>{title}</Text>
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
      </div>
  );
};
