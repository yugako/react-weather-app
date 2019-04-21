import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

import Humidy from '../components/Humidy';
import Wind from '../components/Wind';
import Title from '../components/Title';
import Temperature from '../components/Temperature';
import Pressure from '../components/Pressure';
import Sky from '../components/Sky';
import Search from '../components/Search';
import Err from '../components/Error';
import Loading from '../components/Loading';
import Days from '../components/Days'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    axios.get(`http://api.apixu.com/v1/forecast.json?key=e4c6948631f64f6f921180503191704&q=${lat},${lon}&days=5&lang=uk`)
      .then(res => {
        const location = `${res.data.location.name},${res.data.location.region},${res.data.location.country}`;
        this.setState({
          location,
          currentLocation: location,
          last_updated: res.data.current.last_updated,
          precip: res.data.current.precip_mm,
          icon: res.data.current.condition.icon,
          celsius: res.data.current.temp_c,
          fahrenheit: res.data.current.temp_f,
          clouds: res.data.current.condition.text,
          humidity: res.data.current.humidity,
          pressure: res.data.current.pressure_mb,
          windSpeed: res.data.current.wind_kph,
          windDeg: res.data.current.wind_degree,
          days: res.data.forecast.forecastday
        });
      })
      .catch(err => this.setState({err}));   
  }
  setLocation(lat, lon) {
    this.request(lat, lon);
    this.setState({show: 'none'});
  }
  handleChange(event) {
    this.setState({
      show: 'block',
      currentLocation: event.target.value
    });
    axios.get(`http://api.apixu.com/v1/search.json?key=e4c6948631f64f6f921180503191704&q=${this.state.currentLocation}&lang=uk`)
      .then(res => this.setState({locations: res.data}))
      .catch(err => this.setState({err}));
  } 
  render() {
    const {location, currentLocation, last_updated, precip, icon, celsius, fahrenheit, clouds, humidity, pressure, windSpeed, windDeg, err, show} = this.state;
    const locations = this.state.locations;
    const days = this.state.days;

    return (
      <div className="app">
        <div>
          <Search 
            handleChange={this.handleChange}
            location={currentLocation}
            locations={locations}
            handleClick={this.setLocation}
            show={show}
          />
          {location ? 
          <div className="app-main">
            <Title location={location} updated={last_updated}/>
            
            <div className="app-main__content">
              <div className="app-main__content-main">
                <Sky clouds={clouds} icon={icon} />
                <Temperature 
                  celsius={celsius}
                  fahrenheit={fahrenheit} 
                />
              </div>
              <div className="app-main__content-additional">
                <Humidy humidity={humidity} precip={precip}/>
                <Pressure pressure={pressure} />
                <Wind speed={windSpeed} deg={windDeg} />
              </div>
            </div>
            <Days days={days} />
          </div>
          : err 
          ? <Err message={'От халепа...щось пішло не так :('} />
          : <Loading message={'Отримання даних...Будь ласка зачекайте'} />}
          </div>
      </div>
      
    );
  }
}

export default App;
