import React from 'react';
import { Link, withRouter } from 'react-router';
import { objectToArray } from '../../util/selectors';

class TaskShow extends React.Component {
  componentDidMount() {
    // debugger
  }

  componentWillReceiveProps(newProps) {
  }

  complete() {
    let completeText;
    if (this.props.task.complete) {
      completeText="Nice job!";
    } else {
      completeText="Not done yet";
    }
    return completeText;
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }


  render () {
    const task = this.props.task;
    if (!task) {
      return <div>Loading...</div>;
    }


    const currentList = this.props.lists[this.props.task.list_id];

    return (
      <div className="task-show-container">
        <div className="close clearfix">
          <Link to={"/"}>
            close <i className="fa fa-times" aria-hidden="true"></i>
          </Link>
        </div>
        <form className="task-show-form">
          <div className="task-show-heading">
            <div className="mini-line"></div>
            <input
              type="text"
              value={task.name}
              onChange={this.update('name')} />
            <div className="icons-wrapper">
              <i className="fa fa-info" aria-hidden="true"></i>
              <i className="fa fa-print" aria-hidden="true"></i>
            </div>
          </div>

          <div className="other-fields">
            <div className="due-date-wrapper">
              <label>due</label>
              <input
                type="date"
                value={task.due_date ? task.due_date : ""}
                onChange={this.update('due_date')} />
            </div>
            <select
              value={currentList ? currentList.id : ""}
              onChange={this.update('list_id')} >
              <option value=""></option>
              {
                objectToArray(this.props.lists).map(list => (
                  <option
                    value={list.id}
                    key={list.id}>
                    {list.name}
                  </option>
                ))
              }
            </select>
            <input
              type="number"
              value={task.estimate}
              onChange={this.update('estimate')} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(TaskShow);
