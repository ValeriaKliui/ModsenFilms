import { Footer } from '../components/Footer/index';
import { Header } from '../components/Header';
import { Sort } from '../components/Sort/index';
import { Button } from '../components/Button/index';
import { Films } from '../components/Films';
import { useShowingFilms } from '../utils/FilmsApi/hooks/useShowingFilms';
import { displayMoreFilms, increasePage, selectMovieID, selectSearchQuery } from '../store/slices/ShowingFilmsSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { useEffect } from 'react';
import { Search } from '../components/Search';
import { useSearchedFilms } from '../utils/FilmsApi/hooks/useSearchedFilms';
import { useGetFilmVideo } from '../utils/FilmsApi/FilmsApi';

export const Main: React.FC = () => {
  const searchQuery = useAppSelector(selectSearchQuery);
  const { page: initialPage, films: initialFilms } = useShowingFilms();
  const { page: searchedPage, searchedFilms } = useSearchedFilms({ searchQuery });

  const dispatch = useAppDispatch();
  const showMoreFilms = (): void => {
    dispatch(increasePage());
  };
  useEffect(() => {
    if (searchQuery.length === 0 && initialFilms.length > 0 && initialPage !== 1) {
      dispatch(displayMoreFilms(initialFilms));
    }
  }, [initialFilms]);

  useEffect(() => {
    if (searchedFilms.length > 0 && searchedPage !== 1) {
      dispatch(displayMoreFilms(searchedFilms));
    }
  }, [searchedFilms]);
  const movieID = useAppSelector(selectMovieID);

  const { data } = useGetFilmVideo({ movieID });
  console.log(data?.results);

  return (
    <>
      <Header />
      <Search />
      <Sort />
      <Films />
      <Toggler />
      <Button
        text="Show More"
        onClick={() => {
          showMoreFilms();
        }}
      />
      <Footer />
      {/* {data && (
        <video controls>
          <source src={data} type="video/webm" />
          <source src={data} type="video/ogg" />
          <source src={data} type="video/quicktime" />
          I'm sorry; your browser doesn't support HTML5 video.
        </video>
      )} */}
    </>
  );
};
