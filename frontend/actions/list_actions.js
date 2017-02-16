import * as APIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";

export const fetchLists = () => dispatch => (
  APIUtil.fetchLists().then(lists => dispatch(receiveLists(lists)))
);

export const createList = list => dispatch => (
  APIUtil.createList(list).then(list => dispatch (receiveList(list)))
);

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});
