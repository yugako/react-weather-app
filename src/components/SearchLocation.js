import React from 'react';

const SearchLocation = ({handleChange, location, locations, handleClick, show}) => {
	return (
		<div className='searchLocations'>
            <input onChange={handleChange} value={location} type='text' />
            {locations ? 
               <ul style={{display: show}} className='searchLocations-list'>
                {
                  locations.map((loc) => {
                  return (
                    <li 
                      key={loc.id} 
                      onClick={() => handleClick(loc.lat, loc.lon, loc.name)}
                    >{loc.name}
                    </li>
                  );
                })}
              </ul>
              : null
            }
        </div>
	);
}
export default SearchLocation;