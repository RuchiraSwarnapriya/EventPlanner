import {GET_ITEMS, SET_ITEMS} from '../../actionTypes/itemList';

export const getItemList = () => {
  return {type: GET_ITEMS};
};

export const setItemList = (payload: {}) => {
  return {type: SET_ITEMS, payload};
};

export const fetchItemList = () => {
  return async (dispatch: any) => {
    try {
      await dispatch(getItemList());
      await dispatch(setItemList({}));
      return true;
    } catch (error) {
      console.log(error);
      await dispatch(setItemList({}));
      return false;
    }
  };
};
