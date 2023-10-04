import { Sort } from '../../components/Sort/index';
import { Button } from '../../components/Button/index';
import { Films } from '../../components/Films';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { Main, Container } from './styled';
import { Video } from '../../components/Video';
import { Modal } from '../../components/Modal';
import { setFilmsPerPage, increasePage } from '../../store/slices/filmsSlice';
import { useFilms } from '../../utils/hooks/useFilms/useFilms';
import { FILMS_LIMIT } from '../../constants/filmsConstants';
import { selectMovieID } from '../../store/selectors/filmsSelectors';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filmLimitPerPage, filmsReceived } = useFilms();

  const increaseFilmsLimit = (): void => {
    dispatch(setFilmsPerPage(FILMS_LIMIT + filmLimitPerPage));
    if ((filmsReceived.length - 2 * filmLimitPerPage) / filmLimitPerPage < 0) dispatch(increasePage());
  };
  const movieID = useAppSelector(selectMovieID);

  return (
    <>
      <Sort />
      <Modal>
        <Video />
      </Modal>
      <Main>
        <Container>
          <Films />
          {filmsReceived.length > 0 && <Button text="Show More" onClick={increaseFilmsLimit} />}
        </Container>
      </Main>
    </>
  );
};
