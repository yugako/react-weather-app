import React from 'react';
import Humidy from '../components/Humidy';
import Pressure from '../components/Pressure';
import Wind from '../components/Wind';

const AdditionalContent = ({humidity, precip, pressure, windSpeed, windDeg}) => {
	return (
		<div className="app-main__content-additional">
			<Humidy humidity={humidity} precip={precip}/>
			<Pressure pressure={pressure} />
			<Wind speed={windSpeed} deg={windDeg} />
	  	</div>
	);
}

export default AdditionalContent;