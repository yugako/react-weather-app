import React from 'react';
import moment from 'moment';
import Temperature from '../Temperature';
import Sky from '../Sky';

import './index.css';

const Days = ({days, clickHandler}) => {
	return (
		<div className='days'>
			{days.map(day => {
				return (
					<div key={day.date_epoch}  className='day'>
						<div  className='grey bold day-date' onClick={() => clickHandler(day)}>{moment(day.date).format('MMMM Do')}</div>
						<div className='day-main'>
							<Sky clouds={day.day.condition.text} icon={day.day.condition.icon} />
							<Temperature className='day-temperature' celsius={day.day.maxtemp_c} fahrenheit={day.day.maxtemp_f} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Days;