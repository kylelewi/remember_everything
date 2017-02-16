import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.task;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTask(this.state);
  }

  render() {
    return (
      <div>
        <h3>Create a new task:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Task:
            <input
              type="text"
              value={this.state.name}
              onChange={this.update('name')} />
          </label>

          <label>Due Date:
            <input
              type="date"
              value={this.state.due_date}
              onChange={this.update('due_date')} />
          </label>

          <label>Time Estimate (in minutes):
            <input
              type="number"
              value={this.state.estimate}
              onChange={this.update('estimate')} />
          </label>

          <label>Notes
            <textarea
              value={this.state.notes}
              onChange={this.update('notes')} />
          </label>

          <label>Completed?
            <input
              type="checkbox"
              value={this.state.complete}
              onChange={this.update('complete')} />
          </label>

          <input type="submit" value="Create new task" />
        </form>
      </div>
    );
  }
}

export default TaskForm;
