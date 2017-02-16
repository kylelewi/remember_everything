import React from 'react';
import Filters from './filters';

const Navigation = props => (
  <div className="navigation-sidebar">
    <div className="navigation-logo-container">
      <figure className="logo-container-main">
        <img className="logo-img" src={window.images.logoBlue} />
        <div className="logo-text">
          <h1 className="logo-line-1-main">Remember</h1>
          <h1 className="logo-line-2-main">Everything</h1>
        </div>
      </figure>
    </div>

    <div className="tasks-filter-container">
      <Filters />
    </div>

    <div className="lists-index">
    </div>



  </div>
);

export default Navigation;
