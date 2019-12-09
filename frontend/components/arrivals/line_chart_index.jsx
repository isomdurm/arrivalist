import React from 'react';
import { Link } from 'react-router';

import { scaleLinear, scaleBand } from 'd3-scale';
import XYAxis from '../axis/xy-axis';
import Line from '../line/line';
import { line, curveLinear } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';

import Grid from '../chart/grid';

import _ from 'lodash';

const LineChartIndex = ({ arrivals }) => {
	let results = _.groupBy(arrivals, 'arrival_day_of_week');
	const yArrivals = _.orderBy(arrivals, 'arrivals', 'asc');
	results = _.values(results);

	const parentWidth = 1000;

	const margins = {
    	top: 20,
     	right: 20,
      	bottom: 20,
      	left: 50,
    };

    function toHour(hour) {
  		const hours = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12AM'];

  		return hours[hour];
  	}

    const width = parentWidth - margins.left - margins.right;
    const height = 500 - margins.top - margins.bottom;

    const xScale = scaleBand()
            .domain(arrivals.map(d => toHour(d.arrival_hour)))
            .range([0, width]);

        const yScale = scaleLinear()
            .domain(extent(yArrivals, d => d.arrivals))
            .range([height, 0])

  	return (
  		<React.Fragment>
  			<h2>Visits By Time & Day</h2>
  			<div className='line-graph-card'>
        		<Grid data={results} yArrivals={yArrivals} xScale={xScale} yScale={yScale} className='lineChartSvg' margins={margins} width={width} height={height}/>
        	</div>
        </React.Fragment>
  	);
};

export default LineChartIndex;