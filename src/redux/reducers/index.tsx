import {combineReducers} from 'redux';
import authReducer from './auth';
import imageReducer from './images';
import usersReducer from './users';
import postsReducer from './posts';
import commentsReducer from './comments';

export default combineReducers({
  auth: authReducer,
  images: imageReducer,
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
});
