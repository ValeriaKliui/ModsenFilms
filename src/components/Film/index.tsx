import { type FilmType } from '../../utils/FilmsApi/types';
import { FilmStyled, Poster, Title, InfoContainer, Details, SubDetails, Dot } from './styled';
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
          <Title>{title}</Title>
          <SubDetails>
            <Title>{new Date(release_date).getFullYear()}</Title>
            <Dot />
            <p>Rating: {vote_average}</p>
          </SubDetails>
        </Details>
      </InfoContainer>
    </FilmStyled>
  );
};
