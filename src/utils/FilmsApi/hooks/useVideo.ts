import { useGetFilmVideoQuery } from '../FilmsApi';

interface hookProps {
  movieID: number | null;
}
interface hookReturns {
  src: string;
}

export const useVideo = ({ movieID }: hookProps): hookReturns => {
  const { data } = useGetFilmVideoQuery({ movieID }, { skip: movieID === null });
  const video = data?.results.filter((film) => film.type === 'Trailer');
  const src =
    video != null && video.length > 0
      ? `https://www.youtube-nocookie.com/embed/${video[0].key}?autoplay=1&mute=0&enablejsapi=1`
      : '';
  return { src };
};
