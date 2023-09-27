import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from './slices/ThemeSlice';
import ShowingFilmsReducer from './slices/ShowingFilmsSlice';
import ModalsReducer from './slices/ModalsSlice';
import { rtkApi } from './rtkApi/rtkApi';
export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    showingFilms: ShowingFilmsReducer,
    modals: ModalsReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
