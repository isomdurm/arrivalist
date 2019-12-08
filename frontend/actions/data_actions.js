import * as APIUtil from '../util/arrival_api_util';

export const RECEIVE_ARRIVALS = 'RECEIVE_ARRIVALS';

export const receiveArrivals = arrivals => ({
  type: RECEIVE_ARRIVALS,
  arrivals
});

export const fetchData = filters => dispatch => (
  APIUtil.fetchArrivals(filters).then(arrivals => (
    dispatch(receiveArrivals(arrivals))
  ))
);
