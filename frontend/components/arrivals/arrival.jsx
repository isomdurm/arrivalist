import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LineChartIndex from './line_chart_index';

class ArrivalShow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false
		}
	}

	componentDidMount() {
		this.props.getArrivals()
			.then(() => this.setState({
				loaded: true
			}));
	}

	componentDidUpdate() {
	}

	render() {
		if (!this.state.loaded) {
			return null;
		}

		let { arrivals } = this.props;

		arrivals = _.orderBy(arrivals, 'arrival_hour', 'asc');

		return (
			<LineChartIndex arrivals={ arrivals } />
		);
	}
}

export default ArrivalShow;