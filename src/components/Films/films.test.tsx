import { store } from '@store/index';
import { Provider } from 'react-redux';
import { DarkThemeProvider } from '@utils/DarkTheme/DarkThemeProvider';
import { Films } from '@components/Films';
import { screen, render, fireEvent } from '@testing-library/react';
import * as actions from '@store/slices/filmsSlice';
import { FILMS_LIMIT } from '@constants/filmsConstants';
import { Modal } from '@components/Modal';
import { Video } from '@components/Video';

describe('Films', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  jest.mock('@utils/FilmsApi/FilmsApi', () => ({
    useGetFilmsQuery: jest.fn(),
    useGetFilmsByTitleQuery: jest.fn(),
    useGetFilmVideoQuery: jest.fn(),
  }));

  test('Should be rendered on the page', () => {
    render(
        <Provider store={store}>
            <DarkThemeProvider>
                <Films />
            </DarkThemeProvider>
        </Provider>,
    );

    const films = screen.getAllByTestId('film-card');
    expect(screen.getByTestId('button-show-more')).toBeInTheDocument();
    expect(films.length).toBe(store.getState().films.filmsPerPage);
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

  test('Should open modal with video', () => {
    render(
        <Provider store={store}>
            <DarkThemeProvider>
                <Films />
                <Modal>
                    <Video />
                </Modal>
            </DarkThemeProvider>
        </Provider>,
    );
  });
});
