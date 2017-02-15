// frontend/components/root.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './auth/session_form_container';
import Home from './home';
import AuthPage from './authpage/authpage';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>

      <Route path="/" component={ App }>
        <IndexRoute component={Home} />
        <Route path="/login" component={ AuthPage } />
        <Route path="/signup" component={ AuthPage } />

      </Route>
    </Router>
  </Provider>
)

export default Root;
