import CommentsService from '../../../services/commentsService';

import {GET_COMMENTS, SET_COMMENTS} from '../../actionTypes/comments';

export const getComments = () => {
  return {type: GET_COMMENTS};
};

export const setComments = (payload: {}) => {
  return {type: SET_COMMENTS, payload};
};

export const fetchComments = () => {
  return async (dispatch: any) => {
    try {
      await dispatch(getComments());
      const response: any = await CommentsService.comments();
      await dispatch(setComments(response || {}));
      return true;
    } catch (error) {
      await dispatch(setComments({}));
      return false;
    }
  };
};
