import { type FilmType } from '../../utils/FilmsApi/types';
import { FilmStyled, Title } from './styled';
import noImage from '../../assets/img/no-image.png';

export const Film: React.FC<FilmType> = ({ title, released, backdrop_path }) => {
  const photo = () => {
    if (backdrop_path.includes('null')) return <img src={noImage} alt={title} />;
    return <img src={backdrop_path} alt={title} />;
  };

  return (
    <FilmStyled>
      {photo()}
      <Title>{title}</Title>
      <p>{released}</p>
    </FilmStyled>
  );
};
