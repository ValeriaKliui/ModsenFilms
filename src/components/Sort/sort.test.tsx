import { store } from '@store/index';
import { screen, render, fireEvent } from '@testing-library/react';
import { Sort } from '.';
import { Provider } from 'react-redux';
import { DarkThemeProvider } from '@utils/DarkTheme/DarkThemeProvider';
import { genres } from '@constants/types/genres';
describe('Theme toggler', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('Should be rendered on the page', () => {
    render(
      <Provider store={store}>
        <DarkThemeProvider>
          <Sort />
        </DarkThemeProvider>
      </Provider>,
    );
    const sort = screen.getByTestId('sort');
    const genreButtons = screen.getAllByTestId('genre');
    const genresNames = Object.values(genres).filter((genre) => !Number.isInteger(+genre));
    expect(sort).toBeInTheDocument();
    expect(genreButtons.length).toBe(genresNames.length);
    genreButtons.forEach((genre) => {
      expect(genre).toBeInTheDocument();
    });
  });

  test('Should change the genre', () => {
    render(
      <Provider store={store}>
        <DarkThemeProvider>
          <Sort />
        </DarkThemeProvider>
      </Provider>,
    );
  });
});
