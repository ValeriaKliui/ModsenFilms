import { FilmType } from '../../utils/FilmsApi/types';

export const Film: React.FC<FilmType> = ({ title, released, imageurl, imdbid }) => {
  const photo = () => {
    if (!imageurl || !imageurl.length) return <div>pusto</div>;
    return <img src={imageurl[0]} alt={title} />;
  };

  return (
    <div>
      {photo()}
      <h2>{title}</h2>
      <p>{released}</p>
    </div>
  );
};
