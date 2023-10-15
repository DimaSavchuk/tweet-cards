import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice.js';
import followingStatusReducer from './following/followingSlice.js';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
    followingStatus: persistReducer(persistConfig, followingStatusReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
