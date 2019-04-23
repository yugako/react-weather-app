import React from 'react';
import Humidy from '../components/Humidy';
import Wind from '../components/Wind';

const AdditionalContent = ({humidity, precip, pressure, windSpeed}) => {
	return (
		<div className="app-main__content-additional">
			<Humidy humidity={humidity} precip={precip}/>
			<Wind speed={windSpeed} />
	  	</div>
	);
}

export default AdditionalContent;