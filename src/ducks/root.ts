import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { applicationReducers } from './application';
import { profileReducers } from './profile';

const appReducer = combineReducers({
  application: applicationReducers,
  profile: profileReducers,
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
