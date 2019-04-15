import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

import Humidy from '../components/Humidy.js';
import Wind from '../components/Wind.js';
import AppTitle from '../components/AppTitle.js';
import ContentTitle from '../components/ContentTitle.js';
import Temperature from '../components/Temperature.js';
import Pressure from '../components/Pressure.js';
import Clouds from '../components/Clouds.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: null
    }
    this.getLocation = this.getLocation.bind(this);
  }
  componentDidMount() {
    this.getLocation();
  }
  getLocation() {
    navigator.geolocation.watchPosition((position) => {
      const longitude = position.coords.longitude,
            latitude = position.coords.latitude;

      axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`)
        .then(res => {
          this.setState({
            town: res.data.name,
            country: res.data.sys.country,
            icon: res.data.weather[0].icon,
            temperature: res.data.main.temp,
            clouds: res.data.weather[0].description,
            humidity: res.data.main.humidity,
            pressure: res.data.main.pressure,
            windSpeed: res.data.wind.speed,
            windDeg: res.data.wind.deg,
            fullContent: JSON.stringify(res, '', 4)
          })
        })
        .catch(err => err);
      
      
    });
  }
  render() {
    const {town, country, icon, temperature, clouds, humidity, pressure, windSpeed, windDeg, err} = this.state;
    return (
      <div className="app">
        <AppTitle />
        <div>
          {town ? 
          <div className="app-main">
            <ContentTitle town={town} country={country} />
            <div className="app-main__content">
              <div className="app-main__content-main">
                <Temperature temperature={temperature} />
                <Clouds clouds={clouds} icon={icon} />
              </div>
              <div className="app-main__content-additional">
                <Humidy humidity={humidity} />
                <Pressure pressure={pressure} />
                <Wind speed={windSpeed} deg={windDeg} />
              </div>
            </div>
          </div>
          : err ? 'Ooops...something went wrong :(' : 'Getting data...Please wait'}
          </div>
          <button className='button' onClick={() => this.getLocation()}>Refresh data</button>
      </div>
      
    );
  }
}

export default App;
