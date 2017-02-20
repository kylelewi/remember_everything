import React from 'react';
import TaskIndexItem from './task_index_item';
import TaskFormContainer from './task_form_container';
import { Link } from 'react-router';
import * as Selectors from '../../util/selectors';
import {tasksSelectedStatus} from '../../util/helper';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.tasks.length > 0) {
      this.setState(tasksSelectedStatus(newProps.tasks));
    }
  }

  render() {
    let thisList;
    if (this.props.lists) {
      thisList = this.props.lists[this.props.params.listId];
    }

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
            <div className="action-button-wrapper checkbox-wrapper">
              <input type="checkbox"></input>
              <a className="checkbox-dropdown" href="#">
                <i id="caret" className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
            </div>
            <div className="action-button-wrapper check-wrapper">
              <a href="#">
                <i id="checkmark" className="fa fa-check" aria-hidden="true"></i>
              </a>
            </div>
            <div className="action-button-wrapper">
              <a href="#">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </a>
            </div>
            <div className="action-button-wrapper list-wrapper">
              <a href="#">
                <i className="fa fa-list" aria-hidden="true"></i>
              </a>
            </div>
            <div className="action-button-wrapper">
              <a href="#">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
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
                  allTasks={this.props.tasks}
                  checked={this.state[task.id]} />
              ))
            }
          </ul>
        </div>
        <div className="task-index-summary">
          <div>
            <div className="index-summary-title">
              <h2>{ thisList ? `${thisList.name}` : "All Tasks" }</h2>
            </div>
            <div className="index-summary-badges">
              <div className="badge current-tasks">
                <div className="task-count">
                  <h3>{ Selectors.countTasks(this.props.tasks) }</h3>
                  <figcaption>tasks</figcaption>
                </div>
                <div className="total-time">
                  <h3>{ Selectors.sumEstimates(this.props.tasks) }<span>mins</span></h3>
                  <figcaption>estimated</figcaption>
                </div>
              </div>
              <div className="badge due-today">
                <h3>{ Selectors.dueToday(this.props.tasks) }</h3>
                <figcaption>due today</figcaption>
              </div>
              <div className="badge overdue">
                <h3>{ Selectors.tasksOverdue(this.props.tasks) }</h3>
                <figcaption>overdue</figcaption>
              </div>
              <div className="badge completed-badge">
                <h3>{ Selectors.tasksCompleted(this.props.tasks) }</h3>
                <figcaption>completed</figcaption>
              </div>
            </div>
          </div>
          { this.props.children }
        </div>


      </div>
    );
  }
}

export default TaskIndex;
