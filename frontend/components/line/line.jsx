import React from 'react';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

class Line extends React.Component {
  	constructor() {
    	super();
    	this.ref = React.createRef();
  	}
  	
  	componentDidMount() {
    	const node = this.ref.current;
    	const { xScale, yScale, data, lineGenerator } = this.props;
    	const { scale } = this.props;

    	const initialData = data.map(d => ({
      		arrival_hour: d.arrival_hour,
      		arrivals: d.arrivals
    	}));

    	select(node)
      		.append('path')
      		.datum(initialData)
      		.attr('id', 'line')
      		.attr('stroke', 'blue')
      		.attr('stroke-width', 1)
      		.attr('fill', 'none')
      		.attr('d', lineGenerator);

	    select(node)
	      	.selectAll('circle')
	      	.data(data)
	      	.enter()
	      	.append('circle')
	      	.attr('class', 'circle')
	      	.attr('stroke', '#ECC417')
	      	.attr('stroke-width', '2')
	      	.attr('fill', '#333')
	      	.attr('r', 3)
	      	.attr('cx', d => xScale(d.arrival_hour))
     		.attr('cy', d => yScale(d.arrivals));

  	}
  
  	componentDidUpdate() {
  	}
  
  	updateChart() {
    	const {
          	lineGenerator, xScale, yScale, data,
        } = this.props;

    	const t = transition().duration(5000);

    	const line = select('#line');
    	const dot = selectAll('.circle');

    	line
      		.datum(data)
      		.transition(t)
      		.attr('d', lineGenerator);

      	 dot
      		.data(data)
      		.transition(t)
      		.attr('cx', d => xScale(d.arrival_hour))
      		.attr('cy', d => yScale(d.arrivals));

  	}
  	
  	render() {
  		const { data } = this.props;

    	return (
    		<g id={data[0]['id']} className="line-group" styles={{ color: 'red' }} ref={this.ref} />
    	);
  	}
}

export default Line;