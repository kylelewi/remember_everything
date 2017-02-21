import { RECEIVE_TASKS, RECEIVE_TASK, RECEIVE_CHECK } from '../actions/task_actions';
import merge from 'lodash/merge';

const initialState = {
  tasks: {},
  checkedTasks: {}
};

const TasksReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let newTasks;

  switch (action.type) {
    case RECEIVE_TASKS:
      // newTasks = merge({}, state.tasks, action.tasks);
      return { tasks: action.tasks, checkedTasks: {} };
    case RECEIVE_TASK:
      newTasks = merge({}, state.tasks, {[action.task.id]: action.task});
      return merge({}, state, {tasks: newTasks });
    case RECEIVE_CHECK:
      const newChecks = merge({}, state.checkedTasks, { [action.task.id]: !state.checkedTasks[action.task.id] });
      return { tasks: state.tasks, checkedTasks: newChecks };
    default:
      return state;
  }
};

export default TasksReducer;
