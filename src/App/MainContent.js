import React from 'react';
import Temperature from '../components/Temperature';
import Sky from '../components/Sky';

const MainContent = ({clouds, icon, celsius, fahrenheit}) => {
	return (
		<div className="app-main__content-main">
		  	<Sky clouds={clouds} icon={icon} />
		  	<Temperature 
		    	celsius={celsius}
		    	fahrenheit={fahrenheit} 
		  	/>
		</div>
	);
}

export default MainContent;