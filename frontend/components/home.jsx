import React from 'react';
import Landing from './landing';
import Session from './session';
import { Link } from 'react-router';
import { login } from '../actions/session_actions';
import { connect } from 'react-redux';



// const Home = props => (
  class Home extends React.Component {
    constructor(props) {
      super(props);
      this.loginGuest = this.loginGuest.bind(this);
    }

    loginGuest(e) {
      e.preventDefault();
      this.props.login({username: "robinhood", password: "password"})
        .then(() => this.props.router.push("/main"));
    }

    render() {
      return (
        <div className="home">
          <header className="home-header">
            <figure className="logo-container">
              <img className="logo-img" src={window.images.logo} />
              <div className="logo-text">
                <h1 className="logo-line-1">Remember</h1>
                <h1 className="logo-line-2">Everything</h1>
              </div>
            </figure>
            <navbar className="navbar">
              <Link to={"/contact"} className="nav-link">Contact us</Link>
              <Link to={"/login"} className="nav-link">Log in</Link>
              <Link to={"/signup"} className="nav-link">Sign up for free</Link>
              <button className="guest-login" onClick={ this.loginGuest }>
                Guest Login
              </button>
            </navbar>
          </header>
          <div className="line"></div>
          <main className="landing-content">
            <h1 className="tagline">Because you've got a ton of things to do.</h1>
            <Link className="signup-link" to={"/signup"}>Sign Up Free</Link>
          </main>
          <figure className="animation-stage">
            <figure className="assets-container">
              <img src={window.images.todoGuy} />

              <img className="smile" src={window.images.smile} />

            </figure>
          </figure>
        </div>
      );
    }

}


function mapDispatchToProps(dispatch) {
  return { login: (user) => dispatch(login(user)) };
}

export default connect(null, mapDispatchToProps)(Home);
