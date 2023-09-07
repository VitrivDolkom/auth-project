import { combineReducers } from '@reduxjs/toolkit';

import { userSlice, userApi } from '@/entities/user';

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer
});
