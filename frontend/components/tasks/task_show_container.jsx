import { connect } from 'react-redux';
import TaskShow from './task_show';
import { fetchTask, updateTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    task: state.tasks[ownProps.params.taskId],
    lists: state.lists
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTask: id => dispatch(fetchTask(id)),
  updateTask: task => dispatch(updateTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskShow);
