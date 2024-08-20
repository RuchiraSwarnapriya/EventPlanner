import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from '../reducers';

const initialState = {};

const middleware = [thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
  preloadedState: initialState,
});

export const persistor = persistStore(store);
