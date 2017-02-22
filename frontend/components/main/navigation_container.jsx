import { connect } from 'react-redux';
import Navigation from './navigation';

const mapStateToProps = state => ({
  tasks: Object.keys(state.tasks.tasks).map(id => state.tasks.tasks[id])
});

export default connect(
  mapStateToProps,
  null
)(Navigation);
