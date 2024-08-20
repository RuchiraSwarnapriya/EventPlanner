import PostsService from '../../../services/postsService';
import {GET_POSTS, SET_POSTS} from '../../actionTypes/posts';

export const getPosts = () => {
  return {type: GET_POSTS};
};

export const setPosts = (payload: {}) => {
  return {type: SET_POSTS, payload};
};

export const fetchPosts = () => {
  return async (dispatch: any) => {
    try {
      await dispatch(getPosts());
      const response: any = await PostsService.posts();
      await dispatch(setPosts(response || {}));
      return true;
    } catch (error) {
      await dispatch(setPosts({}));
      return false;
    }
  };
};
