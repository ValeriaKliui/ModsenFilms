import { type FilmType } from '../../utils/FilmsApi/types';
import { FilmStyled, Poster, Text, InfoContainer, Details, SubDetails, Dot } from './styled';
import noImage from '../../assets/img/no-image.png';

export const Film: React.FC<FilmType> = ({ title, backdrop_path, poster_path, release_date, vote_average }) => {
    const photo = () => {
        if (backdrop_path.includes('null')) return <img src={noImage} alt={title} />;
        return <img src={backdrop_path} alt={title} />;
    };

    return (
        <FilmStyled>
            {photo()}
            <InfoContainer>
                <Poster src={poster_path} alt={title} />
                <Details>
                    <Text>{title}</Text>
                    <SubDetails>
                        <Text>{new Date(release_date).getFullYear()}</Text>
                        <Dot />
                        <Text>Rating: {vote_average}</Text>
                    </SubDetails>
                </Details>
            </InfoContainer>
        </FilmStyled>
    );
};
