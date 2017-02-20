import { RECEIVE_TASKS, RECEIVE_TASK } from '../actions/task_actions';
import merge from 'lodash/merge';

const initialState = {
  tasks: {},
  selectedTasks: []
};

const TasksReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      const newTask = {[action.task.id]: action.task};
      return merge({}, state, newTask);
    default:
      return state;
  }
};

export default TasksReducer;
