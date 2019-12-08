import { connect } from 'react-redux';

import { fetchArrivals } from '../../actions/arrival_actions';
import { selectAllArrivals } from '../../reducers/selectors_reducer';

import ArrivalShow from './arrival';

const mapStateToProps = state => ({
	arrivals: selectAllArrivals(state)
})

const mapDispatchToProps = dispatch => ({
	getArrivals: () => dispatch(fetchArrivals())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ArrivalShow);
