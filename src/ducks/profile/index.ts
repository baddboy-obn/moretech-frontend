import { combineReducers } from '@reduxjs/toolkit';
import { personReducer } from './person/personSlice';

export const profileReducers = combineReducers({
  person: personReducer,
});
