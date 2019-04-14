import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      town: '',
      country: '',
      icon: '',
      temperature: '',
      clouds: '',
      fullContent: '',
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
      setInterval(() => {
        axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`)
        .then(res => {
          this.setState({
            town: res.data.name,
            country: res.data.sys.country,
            icon: res.data.weather[0].icon,
            temperature: res.data.main.temp,
            clouds: res.data.weather[0].description,
            fullContent: JSON.stringify(res, '', 4)
          })
        })
        .catch(err => err);
      }, 5000);
      
    });
  }
  render() {
    const {town} = this.state;
    return (
      <div className="app">
        <header className="app-title">
          Weather on {new Date().toLocaleString()}
        </header>
        {town ? 
        <div className="app-main">
          <div className="app-main__title">
            {this.state.town},
            {this.state.country}
          </div>
          <div className="app-main__content">
            <div className="app-main__content-main">
              <div>{this.state.temperature}<sup>o</sup>C </div>
              <div>{this.state.clouds}</div>
              <img src={this.state.icon} />
            </div>
            <div className="app-main__content-additional">
              
            </div>
          </div>
        </div>
        : 'Getting data...Please wait'}
      </div>
      
    );
  }
}

export default App;
