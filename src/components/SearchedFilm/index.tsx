import { type FC } from 'react';
import noImage from '@assets/img/no-image.jpg';
import { type ISearchedFilmProps } from '@constants/types/interfaces';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { useModals } from '@hooks/useModals/useModals';
import { setMovieID } from '@store/slices/filmsSlice';

import {
  FilmInfo,
  PosterSearched,
  SearchedDetail,
  SearchedFilmStyled,
  SearchedTitle,
} from './styled';

export const SearchedFilm: FC<ISearchedFilmProps> = ({ film }) => {
  const {
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    vote_average: voteAverage,
    overview,
    id,
  } = film ?? {};
  const dispatch = useAppDispatch();
  const { openModal } = useModals();

  const handleFilmClick = (): void => {
    if (id !== undefined) {
      dispatch(setMovieID(id));
      openModal();
    }
  };

  return (
    <SearchedFilmStyled onClick={handleFilmClick} data-testid='searched-film'>
      <FilmInfo>
        <SearchedTitle>{title}</SearchedTitle>
        <SearchedDetail>{overview ?? 'Description was not found'}</SearchedDetail>
        <SearchedDetail>
          Released: {releaseDate != null && new Date(releaseDate).getFullYear()}
        </SearchedDetail>
        <SearchedDetail>Rating: {voteAverage}</SearchedDetail>
      </FilmInfo>
      <PosterSearched
        src={
          posterPath != null ? `https://image.tmdb.org/t/p/w154${posterPath}` : noImage
        }
        alt={title}
      ></PosterSearched>
    </SearchedFilmStyled>
  );
};
