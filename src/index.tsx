import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/global';
import { Main } from './pages/Main';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { DarkThemeProvider } from './utils/DarkTheme/providers/DarkThemeProvider/DarkThemeProvider';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
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
