import { type FilmType } from '../../utils/FilmsApi/types';
import { FilmStyled, Poster, Text, InfoContainer, Details, SubDetails, Dot } from './styled';
import noImage from '../../assets/img/no-image.png';
import { setMovieID } from '../../store/slices/ShowingFilmsSlice';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setIsModalOpened } from '../../store/slices/ModalsSlice';

interface FilmProps {
  film: FilmType;
}

export const Film: React.FC<FilmProps> = ({ film }) => {
  const {
    backdrop_path: backdropPath,
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    vote_average: voteAverage,
    id,
  } = film;

  const dispatch = useAppDispatch();
  const photo = (): JSX.Element => {
    if (backdropPath != null && backdropPath.includes('null')) return <img src={noImage} alt={title} />;
    return <img src={`https://image.tmdb.org/t/p/w300${backdropPath}`} alt={title} />;
  };
  const handleFilmClick = (): void => {
    dispatch(setMovieID(id));
    dispatch(setIsModalOpened(true));
  };

  return (
      <FilmStyled onClick={handleFilmClick}>
          {photo()}
          <InfoContainer>
              <Poster src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt={title} />
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
  );
};
