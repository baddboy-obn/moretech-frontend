import { combineReducers } from '@reduxjs/toolkit';
import { personReducer } from './person/personSlice';
import { myBalanceReducer } from './my-balance/myBalanceSlice';

export const profileReducers = combineReducers({
  person: personReducer,
  balance: myBalanceReducer,
});
