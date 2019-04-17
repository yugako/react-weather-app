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
      location: '',
      locations: [],
      hideList: true,
      err: null,
      show: 'none',
    }
    this.fetchData = this.fetchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.request = this.request.bind(this);

  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    navigator.geolocation.watchPosition((position) => {
      const lat = position.coords.latitude,
            lon = position.coords.longitude;
      this.request(lat, lon);
    });
    
  }
  request(lat, lon) {
    axios.get(`http://api.apixu.com/v1/current.json?key=e4c6948631f64f6f921180503191704&q=${lat},${lon}`)
      .then(res => {
        this.setState({
          location: `${res.data.location.name},${res.data.location.region},${res.data.location.country}`,
          icon: res.data.current.condition.icon,
          temperature: res.data.current.temp_c,
          clouds: res.data.current.condition.text,
          humidity: res.data.current.humidity,
          pressure: res.data.current.pressure,
          windSpeed: res.data.current.wind_kph,
          windDeg: res.data.current.wind_degree,
        });
        console.log(res.data)
      })
      .catch(err => this.setState({err}));   
  }
  setLocation(lat, lon, name) {
    this.request(lat, lon);
    this.setState({show: 'none', location: name}); 
  }
  handleChange(event) {
    this.setState({
      show: 'block'
    });
    let location = event.target.value;
    axios.get(`http://api.apixu.com/v1/search.json?key=e4c6948631f64f6f921180503191704&q=${location}&lang=uk`)
      .then(res => this.setState({locations: res.data}))
      .catch(err => err);
  } 
  render() {
    const {location, icon, temperature, clouds, humidity, pressure, windSpeed, windDeg, err, show} = this.state;
    const locations = this.state.locations;
    return (
      <div className="app">
        <AppTitle />
        <div>
          <SearchLocation 
            handleChange={this.handleChange}
            location={location}
            locations={locations}
            handleClick={this.setLocation}
            show={show}
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
