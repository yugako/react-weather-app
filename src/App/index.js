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
import SearchLocation from '../components/SearchLocation.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      location: '',
      locations: [],
      hideList: true,
      err: null
    }
    this.getLocation = this.getLocation.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.openWeather = this.openWeather.bind(this);
  }
  componentDidMount() {
    this.getLocation();
    this.fetchData();
    this.openWeather();
  }
  fetchData() {
    const {latitude, longitude} = this.state;
    axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`)
      .then(res => {
        this.setState({
          location: `${res.data.name},${res.data.sys.country}`,
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
      .catch(err => this.setState({err}));
  }
  openWeather() {
    const {latitude, longitude} = this.state;
    console.log(latitude, longitude)

    axios.get(`http://api.apixu.com/v1/search.json?key=e4c6948631f64f6f921180503191704&q=${latitude},${longitude}`)
      .then(res => console.log(res));
  }
  getLocation() {
    navigator.geolocation.watchPosition((position) => {
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      })   
    });
    
  }
  setLocation(lat, lon, location) {
    this.setState({
      latitude: lat,
      longitude: lon,
      location: location
    });

    this.fetchData(this.state.latitude, this.state.longitude);
  }
  handleChange(event) {
    this.setState({
      location: event.target.value,
    });
    axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.location}&key=695e6abb53304853b60733e670acf97a`)
      .then(res => this.setState({locations: res.data.results}))
      .catch(err => err);
  } 
  render() {
    const {location, icon, temperature, clouds, humidity, pressure, windSpeed, windDeg, err} = this.state;
    const locations = this.state.locations.slice(0,5);
    return (
      <div className="app">
        <AppTitle />
        <div>
          {/*<div className='searchLocations'>
            <input onChange={this.handleChange} value={this.state.location} type='text' />
            {locations ? 
               <ul hidden={} className='searchLocations-list'>
                {
                  locations.map((loc) => {
                  const lat = loc.geometry.lat,
                        lon = loc.geometry.lng,
                        currentLocation = loc.formatted
                  return (<li key={loc.formatted} onClick={() => this.setLocation(lat, lon, currentLocation)}>{loc.formatted}</li>);
                }) }
              </ul>
              : ''
            }
           
          </div>*/}
          <SearchLocation 
            handleChange={this.handleChange}
            location={location}
            locations={locations}
            handleClick={this.setLocation}
          />
          {location ? 
          <div className="app-main">
            <ContentTitle location={location} />
            
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
          <button className='button' onClick={this.fetchData}>Refresh data</button>
      </div>
      
    );
  }
}

export default App;
