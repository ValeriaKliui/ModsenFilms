import { Sort } from '../../components/Sort/index';
import { Button } from '../../components/Button/index';
import { Films } from '../../components/Films';
import { useShowingFilms } from '../../utils/FilmsApi/hooks/useShowingFilms';
import { displayMoreFilms, increasePage, selectSearchQuery } from '../../store/slices/ShowingFilmsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { useEffect } from 'react';
import { useSearchedFilms } from '../../utils/FilmsApi/hooks/useSearchedFilms';
import { Main, Container } from './styled';
import { Video } from '../../components/Video';
import { Modal } from '../../components/Modal';

export const MainPage: React.FC = () => {
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

  return (
      <>
          <Sort />
          <Modal>
              <Video />
          </Modal>
          <Main>
              <Container>
                  <Films />
                  <Button
                      text="Show More"
                      onClick={() => {
              showMoreFilms();
            }}
          />
              </Container>
          </Main>
      </>
  );
};
