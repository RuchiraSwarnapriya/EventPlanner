import {
  GET_LOGIN_DATA,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from '../../actionTypes/auth';

export const initialState = {
  isFetching: false,
  loginData: {},
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_LOGIN_DATA:
      return {...state, isFetching: true};
    case LOGIN_SUCCESS:
      return {...state, isFetching: false, loginData: action.payload};
    case LOGIN_FAILED:
      return {...state, isFetching: false};
    default:
      return state;
  }
};

export default authReducer;
