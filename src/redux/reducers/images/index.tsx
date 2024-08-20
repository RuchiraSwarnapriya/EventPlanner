import {GET_IMAGES, SET_IMAGES} from '../../actionTypes/images';

export const initialState = {
  isFetching: false,
  imagesData: [],
};

const imageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_IMAGES:
      return {...state, isFetching: true};
    case SET_IMAGES:
      return {...state, isFetching: false, imagesData: action.payload};
    default:
      return state;
  }
};

export default imageReducer;
