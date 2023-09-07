import { configureStore } from '@reduxjs/toolkit';

import { userApi } from '@/entities/user';

import { rootReducer } from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
  });

  setupListeners(store.dispatch);

  return store;
};

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
