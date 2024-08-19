import {AUTH, HOME, INFO} from '../../../utils/constants';
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

export const initialState = {
  isLoginLoading: false,
  isSignUpLoading: false,
  tempAppState: '',
  authData: {},
  signUpData: {},
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_LOGIN_DATA:
      return {...state, isLoginLoading: true};
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginLoading: false,
        authData: action.payload,
        tempAppState: HOME,
      };
    case LOGIN_FAILED:
      return {...state, isLoginLoading: false, tempAppState: ''};
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoginLoading: false,
        isSignUpLoading: false,
        authData: '',
        tempAppState: AUTH,
      };
    case LOGIN_FAILED:
      return {...state, isLoginLoading: false, tempAppState: ''};
    case GET_SIGNUP_DATA:
      return {...state, isSignUpLoading: true};
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignUpLoading: false,
        authData: action.payload,
        tempAppState: INFO,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        isSignUpLoading: false,
        tempAppState: '',
      };
    case SET_APP_STATE:
      return {
        ...state,
        tempAppState: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
