import {
  RECEIVE_ARRIVAL_ERRORS
} from '../actions/arrival_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARRIVAL_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
