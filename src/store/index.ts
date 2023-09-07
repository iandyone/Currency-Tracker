import { configureStore } from '@reduxjs/toolkit';
import { currenciesApi } from '@store/reducers';
import appReducer from '@store/reducers/appReducer';
import diagramReducer from '@store/reducers/diagramReducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    diagram: diagramReducer,
    [currenciesApi.reducerPath]: currenciesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currenciesApi.middleware),
});

export type rootState = ReturnType<typeof store.getState>;
