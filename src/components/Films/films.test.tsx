import { Provider } from 'react-redux';
import { Button } from '@components/Button';
import { Film } from '@components/Film';
import { Films } from '@components/Films';
import { Modal } from '@components/Modal';
import { Video } from '@components/Video';
import { FILMS_LIMIT } from '@constants/filmsConstants';
import { type IFilm } from '@constants/types/interfaces';
import { filmsMockData } from '@mocks/filmsMockData';
import { store } from '@store/index';
import * as actions from '@store/slices/filmsSlice';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { DarkThemeProvider } from '@utils/DarkTheme/DarkThemeProvider';

import { FilmsStyled } from './styled';

describe('Films module', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('Should be rendered on the page', async () => {
    const fetchItems = jest.fn(async () => await Promise.resolve(filmsMockData));
    const response = await fetchItems();

    const { findByText } = render(
      <Provider store={store}>
        <DarkThemeProvider>
          <FilmsStyled $isError={false}>
            {response.slice(0, store.getState().films.filmsPerPage).map((film: IFilm) => (
              <Film film={film} key={film.id} />
            ))}
            <Button text='Show More' />
          </FilmsStyled>
        </DarkThemeProvider>
      </Provider>,
    );

    const films = screen.getAllByTestId('film-card');

    expect(screen.getByTestId('button-show-more')).toBeInTheDocument();
    expect(films.length).toBe(store.getState().films.filmsPerPage);

    await waitFor(() => {
      expect(fetchItems).toBeCalledTimes(1);
    });
    const firstFilmTitle = await findByText(filmsMockData[0].title);

    expect(firstFilmTitle).toBeInTheDocument();
  });

  test('Should increase page and film amount after click on show-more button', () => {
    render(
      <Provider store={store}>
        <DarkThemeProvider>
          <Films />
        </DarkThemeProvider>
      </Provider>,
    );

    const increasePage = jest.spyOn(actions, 'increasePage');
    const setFilmsPerPage = jest.spyOn(actions, 'setFilmsPerPage');
    const button = screen.getByTestId('button-show-more');

    fireEvent.click(button);
    expect(increasePage).toBeCalled();
    expect(setFilmsPerPage).toBeCalledWith(FILMS_LIMIT * store.getState().films.page);

    fireEvent.click(button);
    expect(increasePage).toBeCalled();
    expect(setFilmsPerPage).toBeCalledWith(FILMS_LIMIT * store.getState().films.page);

    fireEvent.click(button);
    expect(increasePage).toBeCalled();
    expect(setFilmsPerPage).toBeCalledWith(FILMS_LIMIT * store.getState().films.page);
  });

  test('Should open modal', async () => {
    const fetchItems = jest.fn(async () => await Promise.resolve(filmsMockData));
    const response = await fetchItems();

    render(
      <Provider store={store}>
        <DarkThemeProvider>
          <FilmsStyled $isError={false}>
            {response.slice(0, store.getState().films.filmsPerPage).map((film: IFilm) => (
              <Film film={film} key={film.id} />
            ))}
            <Button text='Show More' />
          </FilmsStyled>
          <Modal>
            <Video />
          </Modal>
        </DarkThemeProvider>
      </Provider>,
    );

    await waitFor(() => {
      const filmsCards = screen.getAllByTestId('film-card');

      fireEvent.click(filmsCards[0]);
    });
    expect(store.getState().modals.isModalOpened).toBe(true);
    expect(store.getState().films.movieID).toBe(response[0].id);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
