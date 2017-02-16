// frontend/components/root.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './auth/session_form_container';
import Home from './home';
import AuthPage from './authpage/authpage';
import Main from './main/main';


const Root = ({ store }) => {
  function redirectIfLoggedIn(nextState, replace) {
    if (store.getState().session.currentUser) {
      replace("/main");
    }
  }

  function ensureLoggedIn(nextState, replace) {
    if (!store.getState().session.currentUser) {
      replace("/");
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>

        <Route path="/" component={ App }>
          <IndexRoute component={Home} />
          <Route path="/login" component={ AuthPage } onEnter={redirectIfLoggedIn} />
          <Route path="/signup" component={ AuthPage } onEnter={redirectIfLoggedIn} />
          <Route path="/main" component={ Main } onEnter={ensureLoggedIn} />

        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
