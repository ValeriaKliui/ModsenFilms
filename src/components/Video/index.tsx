import { useAppSelector } from '../../store/hooks/hooks';
import { selectMovieID } from '../../store/selectors/filmsSelectors';
import { useVideo } from '../../utils/FilmsApi/hooks/useVideo';
import { VideoStyled } from './styled';

export const Video: React.FC = () => {
  const movieID = useAppSelector(selectMovieID);
  const { src } = useVideo({ movieID });
  const srcToDisplay = (): string => {
    return movieID !== null ? src : '';
  };

  return (
      <VideoStyled
          width="100%"
          height="100%"
          src={srcToDisplay()}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
    />
  );
};
