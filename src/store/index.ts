import { configureStore } from '@reduxjs/toolkit';

import appReducer from './reducers/app-reducer';
import { currenciesApi } from './reducers/currencies-api';

export const store = configureStore({
  reducer: {
    app: appReducer,
    [currenciesApi.reducerPath]: currenciesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currenciesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

// [movieApi.reducerPath]: movieApi.reducer,
// },
