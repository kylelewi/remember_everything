import React from 'react';
import Landing from './landing';
import Session from './session';
import { Link } from 'react-router';

const Home = props => (
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
      </navbar>
    </header>
    <div className="line"></div>
    <main className="landing-content">
      <h1 className="tagline">Because you've got a ton of things to do.</h1>
      <Link className="signup-link" to={"/signup"}>Sign Up Free</Link>
    </main>
  </div>

);

export default Home;
