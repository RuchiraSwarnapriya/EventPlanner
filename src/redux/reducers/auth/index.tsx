import {AUTH, HOME, INFO} from '../../../utils/constants';
import {
  FLOW_COMPLETED,
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
  loginData: {},
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
        loginData: action.payload,
        tempAppState: HOME,
      };
    case LOGIN_FAILED:
      return {...state, isLoginLoading: false, tempAppState: ''};
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoginLoading: false,
        isSignUpLoading: false,
        signUpData: '',
        loginData: '',
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
        signUpData: action.payload,
        tempAppState: INFO,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        isSignUpLoading: false,
        signUpData: action.payload,
        tempAppState: '',
      };
    case FLOW_COMPLETED:
      return {
        ...state,
        tempAppState: HOME,
      };
    default:
      return state;
  }
};

export default authReducer;
