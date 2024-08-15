import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState, LoginPayload, SignupPayload} from '../../types/auth';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<SignupPayload>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const {signup, login, logout} = authSlice.actions;

export default authSlice.reducer;
