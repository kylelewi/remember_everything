import React from 'react';
import { Link, withRouter } from 'react-router';

class TaskShow extends React.Component {
  componentDidMount() {
    this.props.fetchTask(this.props.params.taskId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.taskId !== newProps.params.taskId) {
      this.props.fetchTask(newProps.params.taskId);
    }
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

  render () {
    const task = this.props.task;
    if (!task) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{task.name}</h2>
        <h3>{task.due_date}</h3>
        <p>{task.estimate}</p>
        <p>{task.notes}</p>
        <h3>{this.complete()}</h3>
      </div>
    );
  }
}

export default withRouter(TaskShow);
