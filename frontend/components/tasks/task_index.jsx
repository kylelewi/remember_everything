import React from 'react';
import TaskIndexItem from './task_index_item';
import TaskFormContainer from './task_form_container';

class TaskIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div>
        <TaskFormContainer />
        <ul>
          {
            this.props.tasks.map(task => (
              <TaskIndexItem
                key={task.id}
                task={task} />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TaskIndex;
