import { store } from '@store/index';
import { screen, render, fireEvent } from '@testing-library/react';
import { DarkThemeProvider } from '@utils/DarkTheme/DarkThemeProvider';
import * as hooks from '@utils/hooks/reduxHooks/hooks';
import * as actions from '@store/slices/theme';
import { Provider } from 'react-redux';
import { ThemeToggler } from '.';
import { darkTheme, lightTheme } from '@constants/styles/theme';
import themeReducer, { toggleTheme } from '@store/slices/theme';

describe('Theme toggler module', () => {
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
    expect(mockDispatch).toBeCalled();
    expect(toggleTheme).toBeCalled();
    expect(themeCheckbox).toBeChecked();

    fireEvent.click(themeCheckbox);
    expect(mockDispatch).toBeCalled();
    expect(toggleTheme).toBeCalled();
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

    expect(themeReducer(initialState, { type: '' }).theme).toEqual(initialState.theme);

    fireEvent.click(toggler);
    expect(mockDispatch).toBeCalled();
    expect(toggleTheme).toBeCalled();
    expect(themeReducer(initialState, toggleTheme()).theme).toEqual(darkTheme);

    const prevState = { theme: darkTheme };
    fireEvent.click(toggler);
    expect(mockDispatch).toBeCalled();
    expect(toggleTheme).toBeCalled();
    expect(themeReducer(prevState, toggleTheme()).theme).toEqual(lightTheme);
  });
});
