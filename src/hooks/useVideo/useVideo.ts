import type { IUseVideoResponse, IVideoParams } from '@constants/types/interfaces';
import { useGetFilmVideoQuery } from '@utils/FilmsApi/FilmsApi';

export const useVideo = ({ movieID }: IVideoParams): IUseVideoResponse => {
  const { data, isFetching, isSuccess, isError } = useGetFilmVideoQuery(
    { movieID },
    { skip: movieID === null },
  );
  const video = data?.results.filter(film => film.type === 'Trailer');
  const src =
    isSuccess && video !== undefined && video.length > 0
      ? `${process.env.REACT_APP_YOUTUBE_URL}${video[0].key}?autoplay=1&mute=0&enablejsapi=1`
      : '';

  return { src, isFetching, isError, isSuccess };
};
