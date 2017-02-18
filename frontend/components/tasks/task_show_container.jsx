import { connect } from 'react-redux';
import TaskShow from './task_show';
import { fetchTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => ({
  task: state.tasks[ownProps.params.taskId],
  lists: state.lists
});

const mapDispatchToProps = dispatch => ({
  fetchTask: id => dispatch(fetchTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskShow);
