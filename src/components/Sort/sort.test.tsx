import { store } from '@store/index';
import { screen, render, fireEvent } from '@testing-library/react';
import { Sort } from '.';
import { Provider } from 'react-redux';
describe('Theme toggler', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('Should be rendered on the page', () => {
    render(
      <Provider store={store}>
        <Sort />
      </Provider>,
    );
    const sort = screen.getByTestId('sort');
    expect(sort).toBeInTheDocument();
  });
});
