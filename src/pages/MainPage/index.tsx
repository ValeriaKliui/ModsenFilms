import { Sort } from '../../components/Sort/index';
import { Button } from '../../components/Button/index';
import { Films } from '../../components/Films';
import { useAppDispatch } from '../../store/hooks/hooks';
import { Main, Container } from './styled';
import { Video } from '../../components/Video';
import { Modal } from '../../components/Modal';
import { setFilmsPerPage, increasePage } from '../../store/slices/filmsSlice';
import { useFilms } from '../../utils/hooks/useFilms/useFilms';
import { FILMS_LIMIT } from '../../constants/filmsConstants';

export const MainPage: React.FC = () => {
  // const searchQuery = useAppSelector(selectSearchQuery);
  // const { page: initialPage, films: initialFilms, isSuccess: isInitFilmsSuccess } = useShowingFilms();
  // const { page: searchedPage, searchedFilms, isSuccess: isSearchedFilmsSucess } = useSearchedFilms({ searchQuery });

  const dispatch = useAppDispatch();

  // const showMoreFilms = (): void => {
  //   dispatch(increasePage());
  // };
  // useEffect(() => {
  //   if (searchQuery.length === 0 && initialFilms.length > 0 && initialPage !== 1) {
  //     dispatch(displayMoreFilms(initialFilms));
  //   }
  // }, [initialFilms]);

  // useEffect(() => {
  //   if (searchedFilms.length > 0 && searchedPage !== 1) {
  //     dispatch(displayMoreFilms(searchedFilms));
  //   }
  // }, [searchedFilms]);

  // const isSuccesfull = isInitFilmsSuccess || isSearchedFilmsSucess;
  const { filmLimitPerPage, filmsReceived } = useFilms();

  const increaseFilmsLimit = (): void => {
    dispatch(setFilmsPerPage(FILMS_LIMIT));
    if ((filmsReceived.length - 2 * filmLimitPerPage) / filmLimitPerPage < 0) dispatch(increasePage());
  };

  return (
      <>
          <Sort />
          <Modal>
              <Video />
          </Modal>
          <Main>
              <Container>
                  <Films />
                  <Button text="Show More" onClick={increaseFilmsLimit} />
                  {/* {isSuccesfull && (
            <Button
              text="Show More"
              onClick={() => {
                showMoreFilms();
              }}
            />
          )} */}
              </Container>
          </Main>
      </>
  );
};
