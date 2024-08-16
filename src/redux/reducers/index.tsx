import {combineReducers} from 'redux';
import authReducer from './auth';
import itemsReducer from './itemList';

export default combineReducers({
  auth: authReducer,
  items: itemsReducer,
});
