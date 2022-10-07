import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { applicationReducers } from './application';

const appReducer = combineReducers({
  application: applicationReducers,
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
