import * as APIUtil from '../util/task_api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_CHECK = "RECEIVE_CHECK";
export const RECEIVE_CHECKS = "RECEIVE_CHECKS";
export const CLEAR_CHECKS = "CLEAR_CHECKS";
export const UPDATE_CHECKS = "UPDATE_CHECKS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const TOGGLE_SUCCESS = "TOGGLE_SUCCESS";

export const fetchTasks = () => dispatch => (
  APIUtil.fetchTasks()
    .then(tasks => dispatch(receiveTasks(tasks)))
);

export const fetchTask = id => dispatch => (
  APIUtil.fetchTask(id)
    .then(task => dispatch(receiveTask(task)))
);

export const createTask = task => dispatch => (
  APIUtil.createTask(task)
    .then(task => dispatch(receiveTask(task)))
);

export const updateTask = task => dispatch => (
  APIUtil.updateTask(task)
    .then(task => dispatch(receiveTask(task)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const filterTasks = filterTerm => dispatch => (
  APIUtil.filterTasks(filterTerm)
    .then(tasks => dispatch(receiveTasks(tasks)))
);

export const updateChecks = checks => dispatch => (
  APIUtil.updateChecks(checks)
    .then(tasks => dispatch(receiveTasks(tasks)))
);

export const updateDate = (checks, date) => {
  return (
    dispatch => {
      return (
        APIUtil.updateDate(checks, date)
          .then(tasks => dispatch(receiveTasks(tasks)))
      );
    }
  );
};

export const updateList = (checks, listId) => dispatch => (
  APIUtil.updateList(checks, listId)
    .then(tasks => dispatch(receiveTasks(tasks)))
);

export const deleteTasks = (checks) => dispatch => (
  APIUtil.deleteTasks(checks)
    .then(tasks => dispatch(receiveTasks(tasks)))
);

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const receiveCheck = task => ({
  type: RECEIVE_CHECK,
  task
});

export const receiveChecks = tasks => ({
  type: RECEIVE_CHECKS,
  tasks
});

export const clearChecks = () => ({
  type: CLEAR_CHECKS
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors
});

export const toggleSuccess = bool => ({
  type: TOGGLE_SUCCESS,
  bool
});
