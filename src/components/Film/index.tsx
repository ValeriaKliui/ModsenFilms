import { type FilmType } from '../../utils/FilmsApi/types';
import * as S from './styled';
import noImage from '../../assets/img/no-image.png';

export const Film: React.FC<FilmType> = ({ title, released, imageurl }) => {
  const photo = () => {
    if (!imageurl?.length) return <img src={noImage} alt={title} />;
    return <img src={imageurl[0]} alt={title} />;
  };

  return (
    <S.Film>
      {photo()}
      <S.Title>{title}</S.Title>
      <p>{released}</p>
    </S.Film>
  );
};
