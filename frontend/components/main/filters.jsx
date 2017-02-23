import React from 'react';
import { Link, withRouter } from 'react-router';
import * as Selectors from '../../util/selectors';

const Filters = props => {
  return (
    <div className="filters">
      <nav className="nav-parent">
        <div className="nav-top">
          <Link className="menu-item-link" to={"/main/all"}>
            <div className="nav-top-content">
              <div className="menu-arrow"><i className="fa fa-caret-down" aria-hidden="true"></i></div>
              <div className="all-tasks">All Tasks</div>
              <div className="count-icon">
                <p>{Selectors.incompleteTasks(props.tasks).length}</p>
              </div>
            </div>
          </Link>
        </div>
        <ul className="menu-items">
          <Link className="menu-item-link" to={"/main/today"}>
            <div className="menu-item menu-item-below">
              <p className="filter-name">Today</p>
              <div className="count-icon">{Selectors.tasksDueToday(props.tasks).length}</div>
            </div>
          </Link>
          <Link className="menu-item-link" to={"/main/tomorrow"}>
            <div className="menu-item menu-item-below">Tomorrow
              <p className="count-icon">{Selectors.tasksDueTomorrow(props.tasks).length}</p>
            </div>
          </Link>
          <Link className="menu-item-link" to={"/main/thisweek"}>
            <div className="menu-item menu-item-below">This Week
              <p className="count-icon">{Selectors.tasksDueThisWeek(props.tasks).length}</p>
            </div>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Filters;
