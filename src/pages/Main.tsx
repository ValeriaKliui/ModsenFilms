import { Footer } from '../components/Footer/index';
import { Header } from '../components/Header';
import { Sort } from '../components/Sort/index';
import { Button } from '../components/Button/index';
import { Films } from '../components/Films';
import { useShowingFilms } from '../utils/FilmsApi/hooks/useShowingFilms';
import { displayMoreFilms, increasePage } from '../store/slices/ShowingFilmsSlice';
import { useAppDispatch } from '../store/hooks/hooks';
import { useEffect } from 'react';
import { Search } from '../components/Search';
import { useSearchedFilms } from '../utils/FilmsApi/hooks/useSearchedFilms';
export const Main: React.FC = () => {
  const { page: pageFilms, films: filmsInitial } = useShowingFilms();

  const dispatch = useAppDispatch();
  const showMoreFilms = () => {
    dispatch(increasePage());
  };
  useEffect(() => {
    if (filmsInitial && pageFilms != 1) {
      dispatch(displayMoreFilms(filmsInitial));
    }
  }, [filmsInitial]);

  return (
    <>
      <Header />
      <Search />
      <Sort />
      <Films />
      <Button
        text="Show More"
        onClick={() => {
          showMoreFilms();
        }}
      />
      <Footer />
    </>
  );
};
