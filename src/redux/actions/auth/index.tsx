import {
  FLOW_COMPLETED,
  GET_LOGIN_DATA,
  GET_SIGNUP_DATA,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
} from '../../actionTypes/auth';

export const getLoginData = () => {
  return {type: GET_LOGIN_DATA};
};

export const loginSuccess = (payload: {}) => {
  return {type: LOGIN_SUCCESS, payload};
};

export const loginFalied = () => {
  return {type: LOGIN_FAILED};
};

export const getSignUpData = () => {
  return {type: GET_SIGNUP_DATA};
};

export const signUpSuccess = (payload: {}) => {
  return {type: SIGNUP_SUCCESS, payload};
};

export const signUpFalied = () => {
  return {type: SIGNUP_FAILED};
};

export const flowCompleted = () => {
  return {type: FLOW_COMPLETED};
};

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      await dispatch(getLoginData());
      console.log(email, password);
      await dispatch(loginSuccess(email));
      return true;
    } catch (error) {
      console.log(error);
      await dispatch(loginFalied());
      return false;
    }
  };
};

export const signUp = (
  email: string,
  password: string,
  confrimPassword: string,
) => {
  return async (dispatch: any) => {
    try {
      await dispatch(getSignUpData());
      console.log(email, password, confrimPassword);
      await dispatch(signUpSuccess(email));
      return true;
    } catch (error) {
      console.log(error);
      await dispatch(signUpFalied());
      return false;
    }
  };
};
