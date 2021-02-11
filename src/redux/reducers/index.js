import {combineReducers} from 'redux';

import auth from './auth';
import post from './posts';

export default combineReducers({
  auth,
  post,
});
