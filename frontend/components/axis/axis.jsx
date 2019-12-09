import React from 'react';
import { select, selectAll, append } from 'd3-selection';
import { axisBottom, axisLeft } from 'd3-axis';
import { transition } from 'd3-transition';

class Axis extends React.Component {
  	constructor() {
    	super();
    	this.ref = React.createRef();
  	}

  	componentDidMount() {
    	this.renderAxis();
  	}

  	componentDidUpdate() {
    	this.updateAxis();
  	}
  
  	renderAxis() {
  		const that = this;
    	const { scale, orient, ticks } = this.props;
    	const node = this.ref.current;
    	let axis, translate, title;

    	if (orient === 'bottom') {
      		axis = axisBottom(scale)
      					.tickSize(0)
      					.tickSizeOuter(0)

      		translate = 'translate(480, 30)';
      		title = 'Days';

      		select(node).call(axis)
    		.append('text')
    		.attr('fill', 'black')
    		.attr('transform',translate)
    		.text(title)

    	} else {
      		axis = axisLeft(scale)
        		.ticks(ticks)
        			.tickSize(0)
        			.tickSizeOuter(0)

        	translate = 'rotate(-90)';
        	title = 'Visits';

        	select(node).call(axis)
    		.append('text')
    		.attr('fill', 'black')
    		.attr('transform',translate)
    		.attr("y", -42)
      		.attr("x",-220)
    		.text(title);
    	}

  	}
  	
  	updateAxis() {
    	const { scale, orient, ticks } = this.props;
    	const t = transition().duration(1000)

    	if (orient === 'left') {
      		const axis = axisLeft(scale).ticks(ticks); 
      		selectAll(`.${orient}`).transition(t).call(axis)
    	}
  	}
  	
  	render() {
    	const { orient, transform } = this.props;
    	
    	return (
      		<g
        		ref={this.ref}
        		transform={transform}
        		className={`${orient} axis`}
      		/>
    	);
  	}
}

export default Axis;