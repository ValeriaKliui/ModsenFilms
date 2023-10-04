import { Sort } from '@components/Sort';
import { Button } from '@components/Button';
import { Films } from '@components/Films';
import { useAppDispatch } from '@hooks/reduxHooks/hooks';
import { Main, Container } from './styled';
import { Video } from '@components/Video';
import { Modal } from '@components/Modal';
import { setFilmsPerPage, increasePage } from '@store/slices/filmsSlice';
import { useFilms } from '@hooks/useFilms/useFilms';
import { FILMS_LIMIT } from '@constants/filmsConstants';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filmLimitPerPage, filmsReceived } = useFilms();
  const increaseFilmsLimit = (): void => {
    dispatch(setFilmsPerPage(FILMS_LIMIT + filmLimitPerPage));
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
          {filmsReceived.length > FILMS_LIMIT && <Button text="Show More" onClick={increaseFilmsLimit} />}
        </Container>
      </Main>
    </>
  );
};
