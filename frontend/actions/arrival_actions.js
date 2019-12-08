import * as APIUtil from '../util/arrival_api_util';

export const RECEIVE_ARRIVALS = 'RECEIVE_ARRIVALS';
export const RECEIVE_ARRIVAL_ERRORS = 'RECEIVE_ARRIVAL_ERRORS';

export const receiveArrivals = arrivals => ({
  type: RECEIVE_ARRIVALS,
  arrivals
});

export const fetchArrivals = filters => dispatch => (
  APIUtil.fetchArrivals(filters).then(arrivals => (
    dispatch(receiveArrivals(arrivals))
  ))
);

export const receiveErrors = errors => ({
  type: RECEIVE_ARRIVAL_ERRORS,
  errors
});
