import React from 'react';
import './index.css';



const Temperature = ({celsius, fahrenheit}) => {
    let tempValue = React.createRef();
    const setValue = (e) => {
        const target = e.target;
        
        // const tempValue = document.getElementById('value');
        target.dataset.temp === 'celsius' 
            ? tempValue.current.innerHTML = celsius
            : tempValue.current.innerHTML = fahrenheit;
    }
  return (
    <div className='temp'>
      <div className='temp-value'>
      	<span ref={tempValue} className='bold grey'>{celsius}</span>
      </div>
      <div className='measures' onClick={setValue}>
        <span data-temp='celsius'>
          <sup>o</sup>C
        </span> |
        <span data-temp='fahrenheit'>
          F
        </span>
      </div>  
    </div>
  );
};

export default Temperature;
