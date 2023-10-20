import { FilmStyled, Poster, Text, InfoContainer, Details, SubDetails, Dot, Preview } from './styled';
import noImage from '@assets/img/no-image.jpg';
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

    return (
        <FilmStyled onClick={handleFilmClick} data-testid="film-card">
            <Preview src={photoSrc(backdropPath)} alt={title} data-testid="film-preview" />
            <InfoContainer>
                <Poster src={photoSrc(posterPath)} alt={title} data-testid="film-poster" />
                <Details>
                    <Text data-testid="film-title">{title}</Text>
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
