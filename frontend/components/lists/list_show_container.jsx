import { connect } from 'react-redux';
import TaskIndex from '../tasks/task_index';
import { fetchTasks, createTask, receiveCheck, clearChecks } from '../../actions/task_actions';

function filterTasks(tasks, listId) {
  return tasks.filter(task => task.list_id === listId);
}

function isEmpty(object) {
  for(var key in object) {
    if (object.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

const mapStateToProps = (state, ownProps) => {
  let tasksArray = Object.keys(state.tasks.tasks).map(id => state.tasks.tasks[id]);
  let filteredTasks = filterTasks(tasksArray, parseInt(ownProps.params.listId));
  return {
    tasks: filteredTasks,
    checked: state.tasks.checkedTasks,
    listId: ownProps.params.listId,
    lists: state.lists
  };
  // if (isEmpty(state.tasks)) {
  //   return { tasks: [] };
  // } else {
  //   return { tasks:  };
  // }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTasks: () => dispatch(fetchTasks(ownProps.params.listId)),
  createTask: task => dispatch(createTask(task)),
  checkTask: task => dispatch(receiveCheck(task)),
  clearChecks: () => dispatch(clearChecks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);


// slectors.js
// state.tasks.filter(task => task.list_id === listId)
