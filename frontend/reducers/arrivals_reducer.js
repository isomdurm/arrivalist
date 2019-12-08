import {
	RECEIVE_ARRIVALS
} from '../actions/arrival_actions';

const arrivalReducer = (state = {}, action) => {
	Object.freeze(state);

	switch (action.type) {
		case RECEIVE_ARRIVALS:
			return Object.assign({}, state, action.arrivals);
		default:
			return state;
	}
};

export default arrivalReducer;
