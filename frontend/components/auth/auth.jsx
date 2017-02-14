import React from 'react';
import { Link, withRouter } from 'react-router';

const Auth = (props) => {

  const redirectLogout = () => {
    props.logout().then(() => props.router.push("/"))
  };

  const loggedIn = props.currentUser;
  if (loggedIn) {
    return (
      <div>
        <h3>Welcome, {props.currentUser.username}!</h3>
        <button onClick={redirectLogout}>Logout</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link to={`/signup`}>Sign Up!</Link>
        <p>Or</p>
        <Link to={`/login`}>Log In</Link>
      </div>
    )
  }
}

export default withRouter(Auth);
