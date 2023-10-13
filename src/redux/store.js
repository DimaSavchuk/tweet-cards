import { configureStore } from '@reduxjs/toolkit';
import { usersAPI } from './usersAPI';

export const store = configureStore({
  reducer: {
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    usersAPI.middleware,
  ],
});
