import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TasksReducer from './tasks_reducer';

const RootReducer = combineReducers({
  tasks: TasksReducer,
  session: SessionReducer
});

export default RootReducer;
