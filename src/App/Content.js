import React from 'react';
import MainContent from './MainContent';
import AdditionalContent from './AdditionalContent';

const Content = ({clouds, icon, celsius, fahrenheit, humidity, precip, pressure, windSpeed, windDeg}) => {
	return (
		<div className="app-main__content">
	  		<MainContent 
	  			clouds={clouds} 
	  			icon={icon} 
	  			celsius={celsius} 
	  			fahrenheit={fahrenheit} 
	  		/>
	  		<AdditionalContent 
	  			humidity={humidity} 
	  			precip={precip} 
	  			pressure={pressure} 
	  			windSpeed={windSpeed} 
	  			windDeg={windDeg} 
	  		/>
		</div>
	);
}

export default Content;