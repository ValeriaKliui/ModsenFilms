import { store } from '@store/index';
import { screen, render, fireEvent } from '@testing-library/react';
import { Sort } from '.';
import { Provider } from 'react-redux';
import { DarkThemeProvider } from '@utils/DarkTheme/DarkThemeProvider';
import { genres } from '@constants/types/genres';
import * as actions from '@store/slices/filmsSlice';
import { FILMS_LIMIT } from '@constants/filmsConstants';

describe('Sort by genre', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('Should be rendered on the page', () => {
    const { getByText } = render(
        <Provider store={store}>
            <DarkThemeProvider>
                <Sort />
            </DarkThemeProvider>
        </Provider>,
    );
    const sort = screen.getByTestId('sort');
    const genreButtons = screen.getAllByTestId('genre');
    const genresNames = Object.values(genres)
      .filter((genre) => !Number.isInteger(+genre))
      .map((genre) => genre.toLocaleString());
    expect(sort).toBeInTheDocument();
    expect(genreButtons.length).toBe(genresNames.length);
    genreButtons.forEach((genre) => {
      expect(genre).toBeInTheDocument();
    });

    genresNames.forEach((name) => {
      const button = getByText(name.toLocaleLowerCase());
      expect(button).toBeInTheDocument();
    });
  });

  test('Should change the genre in store after click', () => {
    render(
        <Provider store={store}>
            <DarkThemeProvider>
                <Sort />
            </DarkThemeProvider>
        </Provider>,
    );
    const setGenre = jest.spyOn(actions, 'setGenre');

    fireEvent.click(screen.getByText(genres[genres.DRAMA].toLowerCase()));
    expect(setGenre).toBeCalledWith(genres.DRAMA);
    expect(store.getState().films.genre).toBe(genres.DRAMA);

    fireEvent.click(screen.getByText(genres[genres.DOCUMENTARY].toLowerCase()));
    expect(setGenre).toBeCalledWith(genres.DOCUMENTARY);
    expect(store.getState().films.genre).toBe(genres.DOCUMENTARY);
  });

  test('Should reset page, searchTitle, filmsPerPage while clicking on genre', () => {
    render(
        <Provider store={store}>
            <DarkThemeProvider>
                <Sort />
            </DarkThemeProvider>
        </Provider>,
    );
    const setFirstPage = jest.spyOn(actions, 'setFirstPage');
    const setFilmsPerPage = jest.spyOn(actions, 'setFilmsPerPage');
    const setSearchTitle = jest.spyOn(actions, 'setSearchTitle');
    const setSearchQuery = jest.spyOn(actions, 'setSearchQuery');

    fireEvent.click(screen.getByText(genres[genres.DRAMA].toLowerCase()));
    expect(setFirstPage).toBeCalled();
    expect(setFilmsPerPage).toBeCalledWith(FILMS_LIMIT);
    expect(setSearchTitle).toBeCalledWith('');
    expect(setSearchQuery).toBeCalledWith('');

    expect(store.getState().films.page).toBe(1);
    expect(store.getState().films.filmsPerPage).toBe(FILMS_LIMIT);
    expect(store.getState().films.searchQuery).toBe('');
    expect(store.getState().films.searchTitle).toBe('');
  });
});
