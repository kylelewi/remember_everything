import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask } from '../../actions/task_actions';



const mapStateToProps = (state, ownProps) => {
  let task = { name: "", due_date: "", estimate: "", notes: "", complete: false };
  return { task };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return (
    { createTask: task => dispatch(createTask(task)) }
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
