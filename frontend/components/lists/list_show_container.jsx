import { connect } from 'react-redux';
import TaskIndex from '../tasks/task_index';
import {  fetchTasks, createTask, receiveCheck,
          clearChecks, updateChecks, updateDate,
          updateList, deleteTasks } from '../../actions/task_actions';
import * as Selectors from '../../util/selectors';

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
  let filteredIncompleteTasks = Selectors.incompleteTasks(filteredTasks);
  return {
    tasks: filteredIncompleteTasks,
    checked: state.tasks.checkedTasks,
    listId: ownProps.params.listId,
    lists: state.lists
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTasks: () => dispatch(fetchTasks()),
  createTask: task => dispatch(createTask(task)),
  checkTask: task => dispatch(receiveCheck(task)),
  clearChecks: () => dispatch(clearChecks()),
  updateChecks: checks => dispatch(updateChecks(checks)),
  updateDate: (checks, date) => dispatch(updateDate(checks, date)),
  updateList: (checks, listId) => dispatch(updateList(checks, listId)),
  deleteTasks: (checks) => dispatch(deleteTasks(checks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
