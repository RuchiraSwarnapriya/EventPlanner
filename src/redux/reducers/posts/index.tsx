import {GET_POSTS, SET_POSTS} from '../../actionTypes/posts';

export const initialState = {
  isFetching: false,
  postsData: {},
};

const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POSTS:
      return {...state, isFetching: true};
    case SET_POSTS:
      return {...state, isFetching: false, postsData: action.payload};
    default:
      return state;
  }
};

export default postsReducer;
