import { FilmInfo, PosterSearched, SearchedDetail, SearchedFilmStyled, SearchedTitle } from './styled';
import noImage from '../../assets/img/no-image.jpg';
import { type FilmI } from '../../utils/FilmsApi/types';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setMovieID } from '../../store/slices/ShowingFilmsSlice';
import { setIsModalOpened, setIsSearchOpened } from '../../store/slices/ModalsSlice';

interface SearchedFilmProps {
  film?: FilmI;
}

export const SearchedFilm: React.FC<SearchedFilmProps> = ({ film }) => {
  const {
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    vote_average: voteAverage,
    overview,
    id,
  } = film ?? {};
  const dispatch = useAppDispatch();
  const handleFilmClick = (): void => {
    if (id !== undefined) {
      dispatch(setMovieID(id));
      dispatch(setIsModalOpened(true));
      dispatch(setIsSearchOpened(false));
    }
  };

  return (
    <SearchedFilmStyled onClick={handleFilmClick}>
      <FilmInfo>
        <SearchedTitle>{title}</SearchedTitle>
        <SearchedDetail>{overview ?? 'Description was not found'}</SearchedDetail>
        <SearchedDetail>Released: {releaseDate != null && new Date(releaseDate).getFullYear()}</SearchedDetail>
        <SearchedDetail>Rating: {voteAverage}</SearchedDetail>
      </FilmInfo>
      <PosterSearched
        src={posterPath != null ? `https://image.tmdb.org/t/p/w154${posterPath}` : noImage}
        alt={title}
      ></PosterSearched>
    </SearchedFilmStyled>
  );
};
