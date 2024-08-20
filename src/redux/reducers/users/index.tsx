import {GET_USERS, SET_USERS} from '../../actionTypes/users';

export const initialState = {
  isFetching: false,
  usersData: [],
};

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS:
      return {...state, isFetching: true};
    case SET_USERS:
      return {...state, isFetching: false, usersData: action.payload};
    default:
      return state;
  }
};

export default usersReducer;
