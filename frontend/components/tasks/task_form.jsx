import React from 'react';


class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.task;
  }

  componentDidMount() {
    this.setState({list_id: this.props.params.listId});
  }

  componentWillReceiveProps() {
    this.setState({list_id: this.props.params.listId});

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

  successMessage(oldTask, newTask) {
    let messages = [];
    Object.keys(task).forEach(key => {
      if (oldTask[key] !== newTask[key]) {
        messages.push(<p>{key} updated...</p>);
      }
    });

    return messages;
  }


  render() {
    return (
      <div className="task-form">
        <form className="task-form-element" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              onChange={this.update('name')}
              placeholder="Add a task..." />
            <div className="task-submit">
              <div className="submit-container">
                <input
                  onSubmit={this.handleSubmit}
                  type="submit"
                  value="Add Task"
                   />
              </div>
            </div>
        </form>
      </div>
    );
  }
}

export default TaskForm;
