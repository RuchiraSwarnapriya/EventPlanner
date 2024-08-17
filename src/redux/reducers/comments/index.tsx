import {GET_COMMENTS, SET_COMMENTS} from '../../actionTypes/comments';

export const initialState = {
  isFetching: false,
  commentsData: {},
};

const commentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {...state, isFetching: true};
    case SET_COMMENTS:
      return {...state, isFetching: false, commentsData: action.payload};
    default:
      return state;
  }
};

export default commentsReducer;
