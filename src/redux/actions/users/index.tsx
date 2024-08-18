import HomeService from '../../../services/homeService';
import {GET_USERS, SET_USERS} from '../../actionTypes/users';

export const getUsers = () => {
  return {type: GET_USERS};
};

export const setUsers = (payload: {}) => {
  return {type: SET_USERS, payload};
};

export const fetchUsers = () => {
  return async (dispatch: any) => {
    try {
      await dispatch(getUsers());
      const response: any = await HomeService.users();
      await dispatch(setUsers(response || {}));
      return true;
    } catch (error) {
      await dispatch(setUsers({}));
      return false;
    }
  };
};
