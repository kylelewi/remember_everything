import React from 'react';
import Modal from 'react-modal';
import TaskIndexItem from './task_index_item';
import TaskFormContainer from './task_form_container';
import { Link } from 'react-router';
import * as Selectors from '../../util/selectors';
import {tasksSelectedStatus} from '../../util/helper';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDateUpdate = this.handleDateUpdate.bind(this);
    this.handleListUpdate = this.handleListUpdate.bind(this);
    this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }


  toggleCheckbox(task) {
    this.props.checkTask(task);
  }

  countChecks() {
    return Object.keys(this.props.checked).filter(id => this.props.checked[id] === true).length;
  }

  handleUpdate() {
    const checks = Object.keys(this.props.checked);
    this.props.updateChecks(checks);
  }

  handleDateUpdate(date) {
    const checks = Object.keys(this.props.checked);
    this.props.updateDate(checks, date);
  }

  handleListUpdate(listId) {
    const checks = Object.keys(this.props.checked);
    this.props.updateList(checks, listId);
  }

  handleDeleteTasks() {
    const checks = Object.keys(this.props.checked);
    this.props.deleteTasks(checks);
  }

  render() {
    let thisList;
    if (this.props.lists) {
      thisList = this.props.lists[this.props.params.listId];
    }
    let estimateInMinutes = Selectors.sumEstimates(this.props.tasks);
    let estimateFormatted = Selectors.convertTime(estimateInMinutes);

    return (
      <div className="task-index">
        <div className="task-index-list">
          <div className="completed-filters">
            <div className="completed-tabs">
              <Link to={"/"}>Incomplete</Link>
              <Link to={"/main/completed"}>Completed</Link>
            </div>
          </div>
        <div className="action-buttons">
          <div className="unselected">
            <div className="task-filter-dropdown">

            </div>
            <div onClick={this.props.updateChecks} className="action-button-wrapper checkbox-wrapper">
              <input type="checkbox"></input>
              <a className="checkbox-dropdown" href="javaScript:void(0);">
                <i id="caret" className="fa fa-caret-down" aria-hidden="true"></i>
              </a>
            </div>
            <div onClick={this.handleUpdate} className="action-button-wrapper check-wrapper"
                title="Mark task as complete">
              <a href="javaScript:void(0);">
                <i id="checkmark" className="fa fa-check" aria-hidden="true"></i>
              </a>
            </div>
            <div className="action-button-wrapper date-button" title="Change task due date">
              <a className="date-button-link" href="javaScript:void(0);">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </a>
              <div className="make-due dropdown-pane">
                <div>Make due:</div>
                <p key="today" onClick={() => this.handleDateUpdate(0)} id="today">Today</p>
                <p key="tomorrow" onClick={() => this.handleDateUpdate(1)} id="tomorrow">Tomorrow</p>
                <p key="week" onClick={() => this.handleDateUpdate(7)} id="week">1 week</p>
                <p key="no-due-date" onClick={() => this.handleDateUpdate("")} id="no-due-date">No due date</p>
              </div>
            </div>
            <div className="action-button-wrapper list-wrapper" title="Move to new list">
              <a className="list-button-link" href="javaScript:void(0);">
                <i className="fa fa-list" aria-hidden="true"></i>
              </a>
              <div className="make-list dropdown-pane">
                <div>Assign to list:</div>
                {
                  Object.keys(this.props.lists).map(id => this.props.lists[id])
                    .map(list => (
                      <p key={list.id} onClick={() => this.handleListUpdate(list.id)}>{list.name}</p>
                    ))
                }
              </div>
            </div>
            <div onClick={this.handleDeleteTasks} className="action-button-wrapper"
                  title="Delete task">
              <a href="javaScript:void(0);">
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
                  checkedCount={this.countChecks()}
                  router={this.props.router}
                  task={task}
                  listId={this.props.listId}
                  allTasks={this.props.tasks}
                  checked={this.props.checked[task.id]}
                  toggleCheckbox={this.toggleCheckbox}
                  clearChecks={this.props.clearChecks} />
              ))
            }
          </ul>
        </div>
        <div className="task-index-summary">
          <div className="multiple-tasks">
            <h3>{ this.countChecks() } tasks selected</h3>
            <div onClick={this.props.clearChecks} className="clear-selection">clear selection</div>
          </div>
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
                  <h3>
                    {estimateFormatted.hours}<span>hrs </span>{estimateFormatted.minutes}<span>mins</span>
                  </h3>
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




// <i className="fa fa-cog" aria-hidden="true"></i>
// <i id="caret" className="fa fa-caret-down" aria-hidden="true"></i>
