import React from 'react';
import LoginContainer from './login_container';
import SignupContainer from './signup_container';

const AuthPage = props => {

  let component = props.router.location.pathname === "/login" ? <LoginContainer/> : <SignupContainer/>;
  return (
    <div className="authpage">
      <div className="authpage-left">
        <div className="authpage-logo">
          <figure className="logo-container">
            <img className="logo-img" src={window.images.logo} />
            <div className="logo-text">
              <h1 className="logo-line-1">Remember</h1>
              <h1 className="logo-line-2">Everything</h1>
            </div>
          </figure>
        </div>
        <div className="productivity-tip">
          <h3>Productivity tip of the day:</h3>
          <h2>Wake up earlier</h2>
          <p>Research shows that mornings can make or break your day.
             Use the "mind over mattress" mantra to spring out of bed!</p>
         </div>
      </div>
      <div className="authpage-right">
        {component}
      </div>
    </div>
  );
};

export default AuthPage;
