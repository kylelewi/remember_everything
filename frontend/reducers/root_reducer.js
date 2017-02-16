import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TasksReducer from './tasks_reducer';
import ListsReducer from './lists_reducer';

const RootReducer = combineReducers({
  tasks: TasksReducer,
  lists: ListsReducer,
  session: SessionReducer
});

export default RootReducer;
