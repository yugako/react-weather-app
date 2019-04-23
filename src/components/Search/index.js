import React from 'react';
import './index.css';

const SearchLocation = ({handleChange, location, locations, handleClick, show}) => {
	return (
		<div className='searchLocations'>
            <label className='searchLocations-label' htmlFor='s'>Discover your city weather:
            </label>
            <input id='s' onChange={handleChange} value={location} className='searchLocations-input' type='text' />
            {locations ? 
               <ul style={{display: show}} className='searchLocations-list'>
                {
                  locations.map((loc) => {
                    return (
                      <li 
                        key={loc.id}
                        className='searchLocations-list__item' 
                        onClick={() => handleClick(loc.lat, loc.lon)}
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