import React from 'react';

const SearchLocation = ({handleChange, location, locations, handleClick}) => {
	return (
		<div className='searchLocations'>
		  <input onChange={handleChange} value={location} type='text' />
		  {locations ? 
		     <ul className='searchLocations-list'>
		      {
		        locations.map((loc) => {
		        const lat = loc.geometry.lat,
		              lon = loc.geometry.lng,
		              currentLocation = loc.formatted;

		        return (
		        	<li 
		        		key={loc.formatted} 
		        		onClick={() => handleClick(lat, lon, currentLocation)}
		        	>{loc.formatted}
		        	</li>
		        );
		      })}
		    </ul>
		    : ''
		  }
		 
		</div>
	);
}
export default SearchLocation;