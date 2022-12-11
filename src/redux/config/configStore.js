import {createStore} from 'redux';
import { combineReducers } from 'redux';
import todos from '../modules/todo';

const rootReducer = combineReducers({
  todos, //store와 module을 연결시키는 코드
}); 
const store = createStore(rootReducer); 

export default store;
