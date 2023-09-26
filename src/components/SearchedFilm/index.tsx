import { FilmInfo, PosterSearched, SearchedDetail, SearchedFilmStyled, SearchedTitle } from './styled';
import noImage from '../../assets/img/no-image.png';

interface SearchedFilmProps {
  noFilm?: boolean;
  title?: string;
  overview?: string;
  poster_path?: string;
  release_date?: string;
  vote_average?: string;
  amount?: number;
}

export const SearchedFilm: React.FC<SearchedFilmProps> = ({
  noFilm,
  title,
  overview,
  release_date,
  vote_average,
  poster_path,
  amount,
}) => {
  const extraInfo = (): JSX.Element | null => {
    if (noFilm) return <SearchedDetail>Film wasn`&apos;`t found.</SearchedDetail>;
    else if (amount) return <SearchedDetail>We found {amount} films.</SearchedDetail>;
    else return null;
  };

  return (
      <SearchedFilmStyled>
          {extraInfo() ? (
        extraInfo()
      ) : (
          <>
              <FilmInfo>
                  <SearchedTitle>{title}</SearchedTitle>
                  <SearchedDetail>{overview ?? 'Description was not found'}</SearchedDetail>
                  <SearchedDetail>Released: {release_date && new Date(release_date).getFullYear()}</SearchedDetail>
                  <SearchedDetail>Rating: {vote_average}</SearchedDetail>
              </FilmInfo>
              <PosterSearched
                  src={poster_path ? `https://image.tmdb.org/t/p/w154${poster_path}` : noImage}
                  alt={title}
          ></PosterSearched>
          </>
      )}
      </SearchedFilmStyled>
  );
};
