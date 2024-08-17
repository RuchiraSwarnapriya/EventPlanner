import CommentsService from '../../../services/commentsService';

import {GET_COMMENTS, SET_COMMENTS} from '../../actionTypes/comments';

export const getComments = () => {
  return {type: GET_COMMENTS};
};

export const setComments = (payload: {}) => {
  return {type: SET_COMMENTS, payload};
};

export const fetchImages = () => {
  return async (dispatch: any) => {
    try {
      await dispatch(getComments());
      const response: any = await CommentsService.comments();
      console.log(response.slice(0, 10));
      await dispatch(setComments(response || {}));
      return true;
    } catch (error) {
      console.log(error);
      await dispatch(setComments({}));
      return false;
    }
  };
};
