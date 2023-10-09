import { store } from '@store/index';
import { screen, render, fireEvent, getByRole } from '@testing-library/react';
import { DarkThemeProvider } from '@utils/DarkTheme/DarkThemeProvider';
import * as hooks from '@utils/hooks/reduxHooks/hooks';
import * as actions from '@store/slices/themeSlice';
import { Provider } from 'react-redux';
import { ThemeToggler } from '.';
import { darkTheme, lightTheme, ThemeEnum } from '@constants/styles/theme';
import themeReducer from '@store/slices/themeSlice';

describe('Theme toggler', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('Should be rendered on the page', () => {
    render(
      <Provider store={store}>
        <DarkThemeProvider>
          <ThemeToggler />
        </DarkThemeProvider>
      </Provider>,
    );
    const toggler = screen.getByTestId('theme-toggler');
    expect(toggler).toBeInTheDocument();
  });

  // https://medium.com/heybooster/debugging-typescript-jest-dom-matchers-in-vue-js-6962dab4d4cc

  test('Should toggle the theme checkbox', () => {
    render(
      <Provider store={store}>
        <DarkThemeProvider>
          <ThemeToggler />
        </DarkThemeProvider>
      </Provider>,
    );
    const mockDispatch = jest.spyOn(hooks, 'useAppDispatch');
    const toggleTheme = jest.spyOn(actions, 'toggleTheme');

    const themeCheckbox = screen.getByTestId('theme-checkbox');

    expect(themeCheckbox).not.toBeChecked();

    fireEvent.click(themeCheckbox);
    expect(mockDispatch).toHaveBeenCalled();
    expect(toggleTheme).toHaveBeenCalled();
    expect(themeCheckbox).toBeChecked();

    fireEvent.click(themeCheckbox);
    expect(mockDispatch).toHaveBeenCalled();
    expect(toggleTheme).toHaveBeenCalled();
    expect(themeCheckbox).not.toBeChecked();
  });

  test('Should change the state', () => {
    render(
      <Provider store={store}>
        <DarkThemeProvider>
          <ThemeToggler />
        </DarkThemeProvider>
      </Provider>,
    );
    const initialState = { theme: lightTheme };
    const toggler = screen.getByTestId('theme-checkbox');
    const mockDispatch = jest.spyOn(hooks, 'useAppDispatch');
    const toggleTheme = jest.spyOn(actions, 'toggleTheme');

    expect(themeReducer(initialState, { type: '' }).theme).toEqual(initialState.theme);
    fireEvent.click(toggler);
    expect(mockDispatch).toHaveBeenCalled();
    expect(toggleTheme).toHaveBeenCalled();
    expect(themeReducer(initialState, darkTheme).theme).toEqual(lightTheme);

    fireEvent.click(toggler);
    expect(mockDispatch).toHaveBeenCalled();
    expect(toggleTheme).toHaveBeenCalled();
    expect(themeReducer(initialState, lightTheme).theme).toEqual(lightTheme);

    fireEvent.click(toggler);
    expect(mockDispatch).toHaveBeenCalled();
    expect(toggleTheme).toHaveBeenCalled();
    expect(themeReducer(initialState, darkTheme).theme).toEqual(lightTheme);
  });
});
