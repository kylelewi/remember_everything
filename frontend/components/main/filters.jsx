import React from 'react';
import { Link, withRouter } from 'react-router';
import * as Selectors from '../../util/selectors';

const Filters = props => {
  return (
    <div className="filters">
      <nav className="nav-parent">
        <a href="#">
        <div className="nav-top">
          <div className="menu-arrow"><i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
          <div className="all-tasks">All Tasks</div>
        </div>
        </a>
        <ul className="menu-items">
          <li>Today</li>
          <li>Tomorrow</li>
          <li>This Week</li>
        </ul>
      </nav>
    </div>
  );
};

export default Filters;
