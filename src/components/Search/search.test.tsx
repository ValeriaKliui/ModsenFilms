import { Search } from '@components/Search';
import { SearchedFilm } from '@components/SearchedFilm';
import { FILMS_LIMIT } from '@constants/filmsConstants';
import * as hooks from '@hooks/reduxHooks/hooks';
import { filmsMockData } from '@mocks/filmsMockData';
import { store } from '@store/index';
import * as actions from '@store/slices/filmsSlice';
import filmsReducer from '@store/slices/filmsSlice';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { DarkThemeProvider } from '@utils/DarkTheme/DarkThemeProvider';
import { Provider } from 'react-redux';

import { SearchedFilmsContainer } from './styled';

describe('Search module', () => {
  afterAll(() => jest.clearAllMocks());
  afterEach(cleanup);

  const initialState = {
    filmsPerPage: FILMS_LIMIT,
    page: 1,
    films: [],
    genre: null,
    searchQuery: '',
    searchTitle: '',
    movieID: null,
  };
  const testTitle = filmsMockData[0].title;
  const testTitleShort = '123';
  test('Should be rendered on the page', () => {
    render(
      <Provider store={store}>
        <DarkThemeProvider>
          <Search />
        </DarkThemeProvider>
      </Provider>,
    );
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('search-button')).toBeInTheDocument();
  });

  test('Should set search title when typing in input', () => {
    render(
      <Provider store={store}>
        <DarkThemeProvider>
          <Search />
        </DarkThemeProvider>
      </Provider>,
    );
    const searchInput = screen.getByTestId('search-input');
    const setSearchTitle = jest.spyOn(actions, 'setSearchTitle');
    const mockDispatch = jest.spyOn(hooks, 'useAppDispatch');
    expect(filmsReducer(initialState, { type: '' }).searchTitle).toEqual('');

    fireEvent.change(searchInput, { target: { value: testTitle } });
    expect(mockDispatch).toBeCalled();
    expect(setSearchTitle).toBeCalledWith(testTitle);
    expect(filmsReducer(initialState, actions.setSearchTitle(testTitle)).searchTitle).toEqual(testTitle);
    expect(filmsReducer(initialState, actions.setSearchTitle(testTitle)).searchQuery).not.toEqual(testTitle);
    fireEvent.change(searchInput, { target: { value: '' } });
  });

  test('Should open search menu after typing more than 3 symbols or close if value is empty', () => {
    render(
      <Provider store={store}>
        <DarkThemeProvider>
          <Search />
        </DarkThemeProvider>
      </Provider>,
    );

    const searchInput = screen.getByTestId('search-input');

    expect(store.getState().modals.isSearchOpened).toEqual(false);
    fireEvent.change(searchInput, { target: { value: testTitle } });
    expect(store.getState().modals.isSearchOpened).toEqual(true);

    fireEvent.change(searchInput, { target: { value: testTitleShort } });
    expect(store.getState().modals.isSearchOpened).toEqual(false);
  });

  test('Should set searchQuery as searchTitle after submitting', () => {
    render(
      <Provider store={store}>
        <DarkThemeProvider>
          <Search />
        </DarkThemeProvider>
      </Provider>,
    );

    const searchInput = screen.getByTestId('search-input');
    const setSearchQuery = jest.spyOn(actions, 'setSearchQuery');
    const mockDispatch = jest.spyOn(hooks, 'useAppDispatch');
    const searchButton = screen.getByTestId('search-button');
    expect(filmsReducer(initialState, { type: '' }).searchQuery).toEqual('');

    fireEvent.change(searchInput, { target: { value: testTitle } });
    expect(mockDispatch).toBeCalled();
    fireEvent.click(searchButton);

    expect(setSearchQuery).toBeCalledWith(store.getState().films.searchTitle);
    expect(filmsReducer(initialState, actions.setSearchTitle(testTitle)).searchTitle).toEqual(testTitle);
    expect(filmsReducer(initialState, actions.setSearchTitle(testTitle)).searchQuery).not.toEqual(testTitle);
    expect(filmsReducer(initialState, actions.setSearchQuery(testTitle)).searchQuery).toEqual(testTitle);
  });

  test('Should display searched films in search menu', async () => {
    const fetchItems = jest.fn(async () => await Promise.resolve(filmsMockData));
    const response = await fetchItems();

    const { findByText } = render(
      <Provider store={store}>
        <DarkThemeProvider>
          <SearchedFilmsContainer>
            {response.map((film) => (
              <SearchedFilm key={film.id} film={film} />
            ))}
          </SearchedFilmsContainer>
        </DarkThemeProvider>
      </Provider>,
    );
    const firstSearchedFilm = await findByText(filmsMockData[0].title);
    expect(firstSearchedFilm).toBeInTheDocument();
    await waitFor(() => {
      expect(fetchItems).toBeCalledTimes(1);
    });
  });
});
