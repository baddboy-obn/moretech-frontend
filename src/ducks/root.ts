import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { applicationReducers } from './application';
import { profileReducers } from './profile';
import { appAuthReducer } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const authConfig = {
  key: 'app/auth',
  storage,
};

const appReducer = combineReducers({
  application: applicationReducers,
  profile: profileReducers,
  auth: persistReducer(authConfig, appAuthReducer),
});

export type RootCombine = ReturnType<typeof appReducer>;

export const rootReducer: Reducer = (state: RootCombine, action) => {
  if (action.type === 'auth/logOut') {
    /**
     * Возможен сброс store при logout
     */
    //
  }

  return appReducer(state, action);
};
