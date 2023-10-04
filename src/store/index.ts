import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from './slices/ThemeSlice';
import ModalsReducer from './slices/modalsSlice';
import FilmsReducer from './slices/filmsSlice';
import { rtkApi } from './rtkApi/rtkApi';
export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    modals: ModalsReducer,
    films: FilmsReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
