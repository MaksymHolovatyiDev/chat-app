import storage from 'redux-persist/lib/storage';
import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userReducer } from './User/User';

const persistConfig = {
  key: 'user',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const ignoreActions: any = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions,
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
