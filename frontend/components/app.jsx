import React from 'react';
import AuthContainer from './auth/auth_container';
import Landing from './landing';
import SessionFormContainer from './auth/session_form_container';

const App = ({ children }) => (
  <div className="app">
    { children }
  </div>
);

export default App;
