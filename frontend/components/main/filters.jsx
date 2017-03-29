import React from 'react';
import { Link, withRouter } from 'react-router';
import TaskFilters from '../../util/task_filters';

class Filters extends React.Component {

  componentWillReceiveProps(newProps) {
    this.TaskFilters = new TaskFilters(newProps.tasks);
  }

  allTasks() {
    return this.TaskFilters ? this.TaskFilters.tasksByStatus(false).length : [];
  }

  tasksDue(dueDate) {
    return this.TaskFilters ? this.TaskFilters.tasksByDueDate(dueDate).length : [];
  }

  render() {
    return (
      <div className="filters">
        <nav className="nav-parent">
          <div className="nav-top">
            <Link className="menu-item-link" to={"/main/all"}>
              <div className="nav-top-content">
                <div className="menu-arrow"><i className="fa fa-caret-down" aria-hidden="true"></i></div>
                <div className="all-tasks">All Tasks</div>
                <div className="count-icon">
                  <p>{this.allTasks()}</p>
                </div>
              </div>
            </Link>
          </div>
          <ul className="menu-items">
            <Link className="menu-item-link" to={"/main/today"}>
              <div className="menu-item menu-item-below">
                <p className="filter-name">Today</p>
                <div className="count-icon">{this.tasksDue("today")}</div>
              </div>
            </Link>
            <Link className="menu-item-link" to={"/main/tomorrow"}>
              <div className="menu-item menu-item-below">Tomorrow
                <p className="count-icon">{this.tasksDue("tomorrow")}</p>
              </div>
            </Link>
            <Link className="menu-item-link" to={"/main/thisweek"}>
              <div className="menu-item menu-item-below">This Week
                <p className="count-icon">{this.tasksDue("week")}</p>
              </div>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Filters;
