import React, { Component } from "react";
import { Route } from "react-router-dom";

class ArrivalShow extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getArrivals();
	}

	componentDidUpdate() {
	}

	render() {
		const { arrivals } = this.props;

		return (
			<div>Hello</div>
		);
	}
}

export default ArrivalShow;