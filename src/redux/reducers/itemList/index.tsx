import {GET_ITEMS, SET_ITEMS} from '../../actionTypes/itemList';

export const initialState = {
  isFetching: false,
  itemData: {},
};

const itemsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ITEMS:
      return {...state, isFetching: true};
    case SET_ITEMS:
      return {...state, isFetching: false, itemData: action.payload};
    default:
      return state;
  }
};

export default itemsReducer;
