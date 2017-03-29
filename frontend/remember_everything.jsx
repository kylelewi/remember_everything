import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';



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
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
