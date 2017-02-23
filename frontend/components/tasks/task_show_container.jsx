import { connect } from 'react-redux';
import TaskShow from './task_show';
import { fetchTask, updateTask, toggleSuccess } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    task: state.tasks.tasks[ownProps.params.taskId],
    lists: state.lists,
    errors: state.tasks.errors,
    success: state.tasks.success
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTask: id => dispatch(fetchTask(id)),
  updateTask: task => dispatch(updateTask(task)),
  toggleSuccess: bool => dispatch(toggleSuccess(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskShow);
