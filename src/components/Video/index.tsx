import { useAppSelector } from '@hooks/reduxHooks/hooks';
import { useVideo } from '@hooks/useVideo/useVideo';
import { Error } from '@components/Error';
import { Spinner } from '@components/Spinner';
import { VideoStyled, VideoContainer } from './styled';
import { type FC } from 'react';

export const Video: FC = () => {
  const { movieID } = useAppSelector((store) => store.films);
  const { src, isFetching, isError } = useVideo({ movieID });
  const videoSrc = movieID !== null ? src : '';

  if (isError) return <Error />;
  if (isFetching) return <Spinner size={100} />;

  return (
      <VideoContainer>
          <VideoStyled
              width="100%"
              height="100%"
              src={videoSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
      />
      </VideoContainer>
  );
};
