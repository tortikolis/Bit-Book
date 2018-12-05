import { combineReducers } from 'redux';
import { feedReducer } from './feedReducer';
import { modalReducer } from './modalReducer';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { peopleReducer } from './peopleReducer';


export const rootReducer = combineReducers({
  feed: feedReducer,
  modal: modalReducer,
  login: loginReducer,
  register: registerReducer,
  people: peopleReducer,
})




