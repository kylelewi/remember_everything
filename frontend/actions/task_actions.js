import * as APIUtil from '../util/task_api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";

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

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});
