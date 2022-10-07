import { configureStore, Dispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootCombine, rootReducer } from './root';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export const persistedStore = persistStore(store);

export type RootState = RootCombine;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => Dispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
