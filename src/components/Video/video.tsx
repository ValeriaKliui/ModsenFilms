import { type FC } from 'react';
import { Error } from '@components/Error';
import { Spinner } from '@components/Spinner';
import { useAppSelector } from '@hooks/reduxHooks/hooks';
import { useVideo } from '@hooks/useVideo/useVideo';

import { VideoContainer, VideoStyled } from './styled';

const Video: FC = () => {
  const { movieID } = useAppSelector(store => store.films);
  const { src, isFetching, isError, isSuccess } = useVideo({ movieID });

  if (isError) return <Error />;
  if (isFetching) return <Spinner size={100} />;
  if (isSuccess && src.length === 0) return <Error text='TMDB doesnt have this video.' />;

  return (
    <VideoContainer data-testid='video'>
      <VideoStyled
        width='100%'
        height='100%'
        src={src}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </VideoContainer>
  );
};

export default Video;
