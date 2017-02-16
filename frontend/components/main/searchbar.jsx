import React from 'react';
import { Link, withRouter } from 'react-router';


const Searchbar = props => {
  function handleLogout() {
    props.logout().then(() => props.router.push("/"));
  }

  return (
    <div className="searchbar clearfix">
      <div className="search-field-container">
        <input className="search-field" type="text" />
      </div>
      <navbar className="main-navbar">
        <Link to={"/"}>Terms of Use</Link>
        <Link to={"/"}>Contact</Link>
        <button onClick={handleLogout}>Log out</button>
      </navbar>
    </div>
  );
}

export default withRouter(Searchbar);
