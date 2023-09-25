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
import {userReducer} from './User/User';
import {backendAPI} from './operations';

const persistConfig = {
  key: 'user',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const ignoreActions: any = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

export const store = configureStore({
  reducer: {
    [backendAPI.reducerPath]: backendAPI.reducer,
    user: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions,
      },
    }).concat(backendAPI.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
