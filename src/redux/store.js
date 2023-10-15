import { configureStore, combineReducers } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice.js';
import followingStatusReducer from './followingStatus/followingStatusSlice.js';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReduser = combineReducers({
  users: usersReducer,
  followingStatus: persistReducer(persistConfig, followingStatusReducer),
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
