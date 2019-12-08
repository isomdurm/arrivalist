import React from 'react';
import { Link } from 'react-router';

import { scaleLinear, scaleBand } from 'd3-scale';
import XYAxis from '../axis/xy-axis';
import Line from '../line/line';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';

import _ from 'lodash';

const LineChartIndex = ({ arrivals }) => {
	const parentWidth = 500;

	const result = _.groupBy(arrivals, 'arrival_day_of_week');

	const final = _.values(result);

	const yArrivals = _.orderBy(arrivals, 'arrivals', 'asc');

	const margins = {
    	top: 20,
     	right: 20,
      	bottom: 20,
      	left: 50,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 200 - margins.top - margins.bottom;

    const ticks = 5;
    const t = transition().duration(1000);

    const xScale = scaleBand()
    	.domain(arrivals.map(d => d.arrival_hour))
    	.rangeRound([0, width]).padding(0.1);

    const yScale = scaleLinear()
    	.domain(extent(yArrivals, d => d.arrivals))
      	.rangeRound([height, 0])

    const lineGenerator = line()
      	.x(d => xScale(d.arrival_hour))
      	.y(d => yScale(d.arrivals))
      	.curve(curveMonotoneX);

  	return (
		<div>
        	<svg className='lineChartSvg' width={width + margins.left + margins.right} height={height + margins.top + margins.bottom}>
          		<g transform={`translate(${margins.left}, ${margins.top})`}>
            		<XYAxis {...{ xScale, yScale, height, ticks, t }} />
            		{final.map(arrival => (
            			<Line key={arrival.id} data={arrival} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />	
            		))}
          		</g>
        	</svg>
     	</div>
  	);
};

export default LineChartIndex;