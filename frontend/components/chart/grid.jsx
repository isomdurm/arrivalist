import React from 'react';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { axisBottom, axisLeft } from 'd3-axis';
import XYAxis from '../axis/xy-axis';
import Line from '../line/line';
import { line, curveLinear } from 'd3-shape';
import { extent } from 'd3-array';

class Grid extends React.Component {
	constructor() {
        super();
  	    this.ref = React.createRef();
	}
	
	componentDidMount() {


        const that = this;
        const node = this.ref.current;
        const { width, height, data, xScale, yScale, margins } = this.props;

        select(node)
            .append('g')
  		    .attr('class', 'grid')
  		    .attr('transform', 'translate(0,' + height + ')')
  		    .call(that.makeXGridlines(xScale).tickSize(-height).tickFormat(''))

        select(node)
            .append('g')
            .attr('class', 'grid')
            .call(that.makeYGridlines(yScale).tickSize(-width).tickFormat(''))

    }

    makeXGridlines(x) {
        return axisBottom(x)
            .ticks(5)
    }

    makeYGridlines(y) {
        return axisLeft(y)
            .ticks(5)
    }
  
    componentDidUpdate() {
        // this.updateGrid();
    }
  
	updateGrid() {
    }
  	
  	render() {
        const { width, height, data, margins, yArrivals, xScale, yScale } = this.props;
        const ticks = 5;
        const t = transition().duration(1000);

        const lineGenerator = line()
            .x(d => xScale(d.arrival_hour))
            .y(d => yScale(d.arrivals))
            .curve(curveLinear);

    	return (
    		<svg className='lineChartSvg' width={width} height={500}>
                <g transform={`translate(${margins.left}, ${margins.top})`}>
                    <XYAxis {...{ xScale, yScale, height, ticks, t }} />
                    {data.map((arrival, index) => (
                        <Line key={arrival[0]['id']} data={arrival} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />  
                    ))} 
                </g>
            </svg>
    	);
  	}
}

export default Grid;