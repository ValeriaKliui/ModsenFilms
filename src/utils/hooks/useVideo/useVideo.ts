import { useGetFilmVideoQuery } from '../../FilmsApi/FilmsApi';

interface hookProps {
  movieID: number | null;
}
interface hookReturns {
  src: string;
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export const useVideo = ({ movieID }: hookProps): hookReturns => {
  const { data, isFetching, isSuccess, isError } = useGetFilmVideoQuery({ movieID }, { skip: movieID === null });
  const video = data?.results.filter((film) => film.type === 'Trailer');
  const src =
    isSuccess && video !== undefined && video.length > 0
      ? `https://www.youtube-nocookie.com/embed/${video[0].key}?autoplay=1&mute=0&enablejsapi=1`
      : '';
  return { src, isFetching, isError, isSuccess };
};
