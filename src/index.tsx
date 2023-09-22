import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './constants/styles/global';
import { Main } from './pages/Main';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { DarkThemeProvider } from './utils/DarkTheme/providers/DarkThemeProvider/DarkThemeProvider';
import { Error } from './components/Error/index';
import ErrorBoundary from './utils/ErrorBoundary/ErrorBoundary';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);
const ErrorBoundaryLayout: React.FC = () => (
  <ErrorBoundary fallback={<Error />}>
    <Outlet />
  </ErrorBoundary>
);

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <DarkThemeProvider>
        <GlobalStyle />
        <ErrorBoundary fallback={<Error />}>
          <RouterProvider router={router} />{' '}
        </ErrorBoundary>
      </DarkThemeProvider>
    </Provider>
  </StrictMode>,
);
