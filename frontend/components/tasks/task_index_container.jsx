import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { fetchTasks, createTask } from '../../actions/task_actions';

const mapStateToProps = state => ({
  tasks: Object.keys(state.tasks).map(id => state.tasks[id])
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks()),
  createTask: task => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskIndex);
