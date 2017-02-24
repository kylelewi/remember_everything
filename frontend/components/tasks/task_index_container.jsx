import { connect } from 'react-redux';
import TaskIndex from './task_index';
import {  fetchTasks, createTask, receiveCheck,
          clearChecks, updateChecks, updateDate,
          updateList, deleteTasks, changeSearchTerm } from '../../actions/task_actions';
import * as Selectors from '../../util/selectors';

const mapStateToProps = (state, ownProps) => {
  let filteredTasks;
  let pathname = ownProps.params.filter;
  if (ownProps.router.location.pathname.includes("/main/all")) {
    filteredTasks = Selectors.incompleteTasks(state.tasks.tasks);
  } else if (pathname === "today") {
    filteredTasks = Selectors.tasksDueToday(state.tasks.tasks);
  } else if (pathname === "tomorrow") {
    filteredTasks = Selectors.tasksDueTomorrow(state.tasks.tasks);
  } else if (pathname === "thisweek") {
    filteredTasks = Selectors.tasksDueThisWeek(state.tasks.tasks);
  } else if (pathname === "completed") {
    filteredTasks = Selectors.completedTasks(state.tasks.tasks);
  } else {
    filteredTasks = Selectors.incompleteTasks(state.tasks.tasks);
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
