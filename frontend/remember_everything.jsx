import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions';
import { fetchTasks, fetchTask, createTask } from './actions/task_actions';

import { fetchLists, createList } from './actions/list_actions';

import {filterTasks} from './util/task_api_util';

window.filterTasks= filterTasks;

window.login = login;
window.signup = signup;
window.logout = logout;

window.fetchLists = fetchLists;
window.createList = createList;



function checkCurrentUser() {
  let store;
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser}});
  } else {
    store = configureStore();
  }

  return store;
}

document.addEventListener('DOMContentLoaded', () => {
  const store = checkCurrentUser();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
