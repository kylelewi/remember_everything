import React from 'react';
import AuthContainer from './auth/auth_container';

const App = ({ children }) => (
  <div>
    <h1>Remember Everything</h1>
    <AuthContainer />
    { children }
  </div>
);

export default App;
