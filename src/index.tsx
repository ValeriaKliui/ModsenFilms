import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './constants/styles/global';
import { MainPage } from './pages/MainPage/index';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { DarkThemeProvider } from './utils/DarkTheme/providers/DarkThemeProvider/DarkThemeProvider';
import { Error } from './components/Error/index';
import ErrorBoundary from './utils/ErrorBoundary/ErrorBoundary';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

const BasicLayout: React.FC = () => (
    <ErrorBoundary fallback={<Error />}>
        <Header />
        <Outlet />
        <Footer />
    </ErrorBoundary>
);

const router = createBrowserRouter([
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
                <RouterProvider router={router} />{' '}
            </DarkThemeProvider>
        </Provider>
    </StrictMode>,
);
