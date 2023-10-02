import { type FilmI } from '../../utils/FilmsApi/types';
import { FilmStyled, Poster, Text, InfoContainer, Details, SubDetails, Dot, Preview } from './styled';
import noImage from '../../assets/img/no-image.jpg';
import { setMovieID } from '../../store/slices/ShowingFilmsSlice';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setIsModalOpened } from '../../store/slices/ModalsSlice';
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader';

interface FilmProps {
  film: FilmI;
  isFetching?: boolean;
}

export const Film: React.FC<FilmProps> = ({ film, isFetching }) => {
  const {
    backdrop_path: backdropPath,
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    vote_average: voteAverage,
    id,
  } = film;

  const dispatch = useAppDispatch();
  const photoSrc = (src: string): string => {
    if (src === null) return noImage;
    else return `https://image.tmdb.org/t/p/w300${src}`;
  };
  const handleFilmClick = (): void => {
    dispatch(setMovieID(id));
    dispatch(setIsModalOpened(true));
  };

  return (
      <>
          {isFetching !== undefined && isFetching ? (
              <SkeletonLoader />
      ) : (
          <FilmStyled onClick={handleFilmClick}>
              <Preview src={photoSrc(backdropPath)} alt={title} />
              <InfoContainer>
                  <Poster src={photoSrc(posterPath)} alt={title} />
                  <Details>
                      <Text>{title}</Text>
                      <SubDetails>
                          <Text>{new Date(releaseDate).getFullYear()}</Text>
                          <Dot />
                          <Text>Rating: {voteAverage}</Text>
                      </SubDetails>
                  </Details>
              </InfoContainer>
          </FilmStyled>
      )}
      </>
  );
};
