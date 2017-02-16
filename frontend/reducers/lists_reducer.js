import { RECEIVE_LISTS, RECEIVE_LIST } from '../actions/list_actions';
import merge from 'lodash/merge';

const ListsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      const newList = {[action.list.id]: action.list};
      return merge({}, state, newList);
    default:
      return state;
  }
};

export default ListsReducer;
