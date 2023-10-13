import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from '@store/slices/theme';
import ModalsReducer from '@store/slices/modals';
import FilmsReducer from '@store/slices/filmsSlice';
import { rtkApi } from '@store/rtkApi/rtkApi';

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
