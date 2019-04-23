import React from 'react';
import MainContent from './MainContent';
import AdditionalContent from './AdditionalContent';

const Content = ({clouds, icon, celsius, fahrenheit, humidity, precip, windSpeed}) => {
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
	  			windSpeed={windSpeed} 
	  		/>
		</div>
	);
}

export default Content;