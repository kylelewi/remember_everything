import React from 'react';
import { Link, hashHistory } from 'react-router';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.checked;
  }

  componentWillReceiveProps(newProps) {
    if (this.props.checkedCount !== newProps.checkedCount) {
      const pane = document.querySelector(".multiple-tasks");
      if (newProps.checkedCount === 0) {
        pane.classList.remove("show-pane");
      }
      else if (newProps.checkedCount === 1) {
        pane.classList.remove("show-pane");
      } else {
        pane.classList.add("show-pane");
      }
    }
  }

  setPathname() {
    let path;
    if (this.props.router.location.pathname.includes("list")) {
      path = `/main/lists/${this.props.listId}/tasks/${this.props.task.id}`;
    } else {
      path = `/main/${this.props.router.params.filter}/${this.props.task.id}`;
    }

    return path;
  }

  handleClickLink(task) {
    this.props.clearChecks();
    this.props.toggleCheckbox(task);
    this.props.router.push(this.setPathname());
  }

  render() {
    return (
      <li>
      <div className="mini-line"></div>
        <div className="checkbox-wrapper">
          <input onClick={() => this.props.toggleCheckbox(this.props.task)} type="checkbox"
          checked={this.state} />
        </div>
        <Link onClick={() => this.handleClickLink(this.props.task)} to={this.setPathname(this.props.router)}>
          <div className="task-item-content">
            <p>{this.props.task.name}</p>
          </div>
        </Link>
      </li>
    );
  }
}

export default TaskIndexItem;
