import { connect } from 'react-redux';
import TaskIndex from './task_index';
import {  fetchTasks, createTask, receiveCheck,
          clearChecks, updateChecks, updateDate,
          updateList, deleteTasks, changeSearchTerm } from '../../actions/task_actions';
import TaskFilters from '../../util/task_filters';


const mapStateToProps = (state, ownProps) => {
  let pathname = ownProps.params.filter;
  let filteredTasks;

  let taskFilters = new TaskFilters(state.tasks.tasks);
  let today = taskFilters.tasksByDueDate("today");
  let tomorrow = taskFilters.tasksByDueDate("tomorrow");
  let thisWeek = taskFilters.tasksByDueDate("week");
  let complete = taskFilters.tasksByStatus(true);
  let incomplete = taskFilters.tasksByStatus(false);

  switch (pathname) {
    case "all":
      filteredTasks = incomplete; break;
    case "today":
      filteredTasks = today; break;
    case "tomorrow":
      filteredTasks = tomorrow; break;
    case "thisweek":
      filteredTasks = thisWeek; break;
    case "completed":
      filteredTasks = complete; break;
    default:
      filteredTasks = incomplete; break;
  }

  return(
    {
      tasks: filteredTasks,
      checked: state.tasks.checkedTasks,
      lists: state.lists,
      searchTerm: state.searchTerm
    }
  );
};

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks()),
  createTask: task => dispatch(createTask(task)),
  checkTask: task => dispatch(receiveCheck(task)),
  clearChecks: () => dispatch(clearChecks()),
  updateChecks: checks => dispatch(updateChecks(checks)),
  updateDate: (checks, date) => dispatch(updateDate(checks, date)),
  updateList: (checks, listId) => dispatch(updateList(checks, listId)),
  deleteTasks: (checks) => dispatch(deleteTasks(checks)),
  changeSearchTerm: searchTerm => dispatch(changeSearchTerm(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
