import { combineReducers } from 'redux';
import giftsReducer from '../reducer/giftsReducer';
import loginReducer from '../reducer/loginReducer';
import usersReducer from '../reducer/usersReducer';

const rootReducer = combineReducers({
  gifts: giftsReducer,
  login: loginReducer,
  users: usersReducer
});

export default rootReducer;
