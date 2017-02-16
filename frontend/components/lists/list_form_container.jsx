import { connect } from 'react-redux';
import ListForm from './list_form';
import { createList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  let list = { name: "" };
  return { list };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { createList: list => dispatch(createList(list)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm);
