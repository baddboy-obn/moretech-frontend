import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { appThemeReducer } from './services/themeSlice';

const themeConfig = {
  key: 'app/theme',
  storage,
};

export const applicationReducers = combineReducers({
  theme: persistReducer(themeConfig, appThemeReducer),
});
