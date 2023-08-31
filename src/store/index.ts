import { configureStore } from '@reduxjs/toolkit';

import appReducer from './reducers/app-reducer';
import { currenciesApi } from './reducers/currencies-api';
import diagramReducer from './reducers/diagram-reducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    diagram: diagramReducer,
    [currenciesApi.reducerPath]: currenciesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currenciesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
