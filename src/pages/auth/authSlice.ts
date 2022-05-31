import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

import { CounterState, User } from '../../types';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
} as CounterState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    init: (
      state,
      {
        payload: { isAuthenticated, user }
      }: PayloadAction<{ user: User | null; isAuthenticated: boolean }>
    ) => {
      state.isAuthenticated = isAuthenticated;
      state.isInitialized = true;
      state.user = user;
    },
    login: (
      state,
      { payload: { user } }: PayloadAction<{ user: User | null }>
    ) => {
      state.isAuthenticated = true;
      state.user = user;
    }
  }
});
export const selectStateAuth = (state: RootState) => state.auth;
export const { init, login } = authSlice.actions;
export default authSlice.reducer;
