import {
  GET_LOGIN_DATA,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
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

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      await dispatch(getLoginData());
      console.log(email, password);
      await dispatch(loginSuccess(email));
      return true;
    } catch (error) {
      console.log(error);
      await dispatch(loginSuccess(email));
      return false;
    }
  };
};
