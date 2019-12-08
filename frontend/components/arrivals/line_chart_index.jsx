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

	const parentWidth = 500;

	const margins = {
    	top: 20,
     	right: 20,
      	bottom: 20,
      	left: 50,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 200 - margins.top - margins.bottom;

    const xScale = scaleBand()
            .domain(arrivals.map(d => d.arrival_hour))
            .rangeRound([0, width]).padding(0.1);

        const yScale = scaleLinear()
            .domain(extent(yArrivals, d => d.arrivals))
            .rangeRound([height, 0])

  	return (
        <Grid data={results} yArrivals={yArrivals} xScale={xScale} yScale={yScale} className='lineChartSvg' margins={margins} width={width + margins.left + margins.right} height={height + margins.top + margins.bottom}/>
  	);
};

export default LineChartIndex;