import React from 'react';
import AuthContainer from './auth/auth_container';
import Landing from './landing'

const App = ({ children }) => (
  <div className="app">
    <Landing />
    <AuthContainer />
    { children }
  </div>
);

export default App;
