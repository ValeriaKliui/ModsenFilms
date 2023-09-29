import { FilmInfo, PosterSearched, SearchedDetail, SearchedFilmStyled, SearchedTitle } from './styled';
import noImage from '../../assets/img/no-image.png';
import { type FilmType } from '../../utils/FilmsApi/types';

interface SearchedFilmProps {
  film?: FilmType;
}

export const SearchedFilm: React.FC<SearchedFilmProps> = ({ film }) => {
  const { poster_path: posterPath, title, release_date: releaseDate, vote_average: voteAverage, overview } = film ?? {};

  return (
      <SearchedFilmStyled>
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
