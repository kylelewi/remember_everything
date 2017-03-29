import {  RECEIVE_TASKS, RECEIVE_TASK, RECEIVE_CHECK,
          RECEIVE_CHECKS, CLEAR_CHECKS, RECEIVE_ERRORS,
          CLEAR_ERRORS, TOGGLE_SUCCESS } from '../actions/task_actions';
import merge from 'lodash/merge';

const initialState = {
  tasks: {},
  checkedTasks: {},
  errors: [],
  success: false
};

const TasksReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let newTasks;

  switch (action.type) {
    case RECEIVE_TASKS:
      let thisNewState = Object.assign({}, newState, { tasks: action.tasks, checkedTasks: {} });
      debugger
      return thisNewState;
    case RECEIVE_TASK:
      newTasks = merge({}, state.tasks, {[action.task.id]: action.task});
      return merge(newState, {tasks: newTasks, errors: []});
    case RECEIVE_CHECK:
      const receivedCheck = { [action.task.id]: !state.checkedTasks[action.task.id] };
      const newChecks = merge({}, state.checkedTasks, receivedCheck);
      return merge(newState, { tasks: state.tasks, checkedTasks: newChecks });
    case RECEIVE_CHECKS:
      newTasks = merge({}, state.tasks, action.tasks);
      return merge(newState, { tasks: newTasks, checkedTasks: state.checkedTasks });
    case CLEAR_CHECKS:
      return merge(newState, { tasks: state.tasks, checkedTasks: {} });
    case RECEIVE_ERRORS:
      return merge(newState, { errors: action.errors });
    case CLEAR_ERRORS:
      return merge({}, state, { errors: []});
    case TOGGLE_SUCCESS:
      return merge({}, state, { success: action.bool });
    default:
      return state;
  }
};

export default TasksReducer;
