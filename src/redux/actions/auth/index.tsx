import {
  SET_APP_STATE,
  GET_LOGIN_DATA,
  GET_SIGNUP_DATA,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
} from '../../actionTypes/auth';

import auth from '@react-native-firebase/auth';

export const getLoginData = () => {
  return {type: GET_LOGIN_DATA};
};

export const loginSuccess = (payload: {}) => {
  return {type: LOGIN_SUCCESS, payload};
};

export const loginFalied = () => {
  return {type: LOGIN_FAILED};
};

export const logoutSucess = () => {
  return {type: LOGOUT_SUCCESS};
};

export const getSignUpData = () => {
  return {type: GET_SIGNUP_DATA};
};

export const signUpSuccess = (payload: {}) => {
  return {type: SIGNUP_SUCCESS, payload};
};

export const signUpFailed = () => {
  return {type: SIGNUP_FAILED};
};

export const setAppState = (payload: string) => {
  return {type: SET_APP_STATE, payload};
};

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      await dispatch(getLoginData());
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      await dispatch(loginSuccess(userCredential.user));
      return true;
    } catch (error) {
      await dispatch(loginFalied());
      return false;
    }
  };
};

export const logOut = () => {
  return async (dispatch: any) => {
    try {
      await auth().signOut();
      dispatch(logoutSucess());
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
};

export const signUp = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      await dispatch(getSignUpData());
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      dispatch(signUpSuccess(userCredential.user));
      return true;
    } catch (error) {
      console.error(error);
      dispatch(signUpFailed());
      return false;
    }
  };
};
