import React from 'react';
import TaskIndexItem from './task_index_item';
import TaskFormContainer from './task_form_container';
import { Link } from 'react-router';

class TaskIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div className="task-index">
        <div className="task-index-list">
          <div className="completed-filters">
            <div className="completed-tabs">
              <i className="fa fa-print" aria-hidden="true"></i>
              <Link to={"/"}>Incomplete</Link>
              <Link to={"completed"}>Completed</Link>
              <i className="fa fa-cog" aria-hidden="true"></i>
              <i id="caret" className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
          </div>
        <div className="action-buttons">
          <div className="unselected">
            <div className="task-filter-dropdown">

            </div>
            <div className="checkbox-wrapper">
              <input type="checkbox"></input>
              <a className="checkbox-dropdown" href="#">
                <i id="caret" className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="selected">

          </div>
        </div>
          <TaskFormContainer />
          <ul className="tasks-list-ul">
            {
              this.props.tasks.map(task => (
                <TaskIndexItem
                  key={task.id}
                  router={this.props.router}
                  task={task}
                  listId={this.props.listId}
                  allTasks={this.props.tasks} />
              ))
            }
          </ul>
        </div>
        <div className="task-index-summary">
        { this.props.children }

        </div>
      </div>
    );
  }
}

export default TaskIndex;
