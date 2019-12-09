import React from 'react';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';

class Line extends React.Component {
  	constructor() {
    	super();
    	this.ref = React.createRef();

    	this.handleMouseOver = this.handleMouseOver.bind(this);
  	}
  	
  	componentDidMount() {
  		const that = this;
    	const node = this.ref.current;
    	const { xScale, yScale, data, lineGenerator } = this.props;
    	const { scale } = this.props;

    	const initialData = data.map(d => ({
      		arrival_hour: that.toHour(d.arrival_hour),
      		arrivals: d.arrivals
    	}));

    	const colors =['rgba(235, 159, 211, 0.8)', 'rgba(102, 153, 196, 0.8)', 'rgba(166, 130, 122, 0.8)', 'rgba(108, 181, 105, 0.8)', 'rgba(226, 98, 97, 0.8)', 'rgba(248, 158, 96, 0.8)', 'rgba(180, 151, 205, 0.8)']

    	select(node)
      		.append('path')
      		.datum(initialData)
      		.attr('id', 'line')
      		.attr('stroke', colors[node.id])
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
	      	.attr('stroke-width', '0')
	      	.attr('fill', colors[node.id])
	      	.attr('r', 3)
	      	.attr('cx', d => xScale(that.toHour(d.arrival_hour)))
     		.attr('cy', d => yScale(d.arrivals))
     

  	}
  
  	componentDidUpdate() {
  	}

  	toHour(hour) {
  		const hours = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12AM'];

  		return hours[hour];
  	}

  	handleMouseOver(obj) {
  		console.log(obj);
  		const node = obj.ref.current;
  		console.log(node);
  		select(node)
  			.attr({
              fill: "orange",
              r: 20 * 2
            });

        this.updateChart();
  	}
  
  	updateChart() {
    	const {
          	lineGenerator, xScale, yScale, data,
        } = this.props;

    	const t = transition().duration(500);

    	const dot = selectAll('.circle');

      	 dot
      		.data(data)
      		.transition(t)

  	}
  	
  	render() {
  		const { data, kIndex } = this.props;

    	return (
    		<g id={kIndex} className="line-group" ref={this.ref} />
    	);
  	}
}

export default Line;