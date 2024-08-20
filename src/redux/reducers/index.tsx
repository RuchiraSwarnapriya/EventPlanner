import {combineReducers} from 'redux';
import authReducer from './auth';
import imageReducer from './images';
import usersReducer from './users';
import postsReducer from './posts';
import commentsReducer from './comments';
import userReducer from './user';

export default combineReducers({
  authorizer: authReducer,
  images: imageReducer,
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  user: userReducer,
});
