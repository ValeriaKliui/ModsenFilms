import { type FC, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Error } from '@components/Error';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { GlobalStyle } from '@constants/styles/global';
import { MainPage } from '@pages/MainPage';
import { store } from '@store/index';
import { DarkThemeProvider } from '@utils/DarkTheme/DarkThemeProvider';
import ErrorBoundary from '@utils/ErrorBoundary/ErrorBoundary';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

const BasicLayout: FC = () => (
  <ErrorBoundary fallback={<Error text='Something went wrong' />}>
    <Header />
    <Outlet />
    <Footer />
  </ErrorBoundary>
);

const router = createHashRouter([
  {
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <DarkThemeProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </DarkThemeProvider>
    </Provider>
  </StrictMode>,
);
