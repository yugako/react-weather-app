import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      data: null,
      err: null
    }
    this.getLocation = this.getLocation.bind(this);
    this.fetchData = this.fetchData.bind(this);

  }
  componentDidMount() {
    this.getLocation();
  }
  fetchData() {
    const {latitude, longitude} = this.state;
    axios.get(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`)
          .then(res => {
            const resData = {...res.data};
            this.setState({
              data: {...resData}
            })
          })
          .catch(err => err);
  }
  getLocation() {
    navigator.geolocation.watchPosition((position) => {
      this.setState({
         longitude: position.coords.longitude,
         latitude: position.coords.latitude,
      })
    });
  }
  render() {
    const {data} = this.state;
    return (
      <div className="app">
        Simple weather app!
        <button onClick={() => this.fetchData()}>
          Fetch data
        </button>
        <header>
            {data ? data.weather.map((item,index) => {
              return (
                <div key={item.id}>
                  <p>{item.main}</p>
                  <img src={item.icon} alt={item.main}/>
                  <p>{item.description}</p>
                </div>
              );
            }): 'Get your data'}
        </header>
      </div>
    );
  }
}

export default App;
