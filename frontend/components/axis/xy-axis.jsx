import React from 'react';
import Axis from './axis';

const XYAxis = ({ xScale, yScale, height, width }) => {
  	const xSettings = {
    	scale: xScale,
    	orient: 'bottom',
    	transform: `translate(0, ${height})`,
  	};
  
  	const ySettings = {
    	scale: yScale,
    	orient: 'left',
    	transform: 'translate(0, 0)',
  	};
  
  	return (
    	<g className='axis-group'>
      		<Axis xScale={xScale} yScale={yScale} height={height} width={width} {...xSettings} />
      		<Axis xScale={xScale} yScale={yScale} height={height} width={width} {...ySettings} />
    	</g>
  	);
};

export default XYAxis;
