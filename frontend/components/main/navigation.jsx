import React from 'react';
import Filters from './filters';
import ListIndexContainer from '../lists/list_index_container';
import {Link} from 'react-router'

const Navigation = props => (
  <div className="navigation-sidebar">
    <div className="navigation-logo-container clearfix">
      <Link to={"/"}>
        <figure className="logo-container-main ">
          <img className="logo-img" src={window.images.logoBlue} />
          <div className="logo-text">
            <h1 className="logo-line-1-main">Remember</h1>
            <h1 className="logo-line-2-main">Everything</h1>
          </div>
        </figure>
      </Link>
    </div>

    <div className="lists">
      <div className="tasks-filter-container">
        <Filters />
      </div>

      <div className="lists-index">
        <ListIndexContainer />
      </div>
    </div>



  </div>
);

export default Navigation;
