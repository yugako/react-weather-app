import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

import Content from './Content';
import Title from '../components/Title';
import Search from '../components/Search';
import Err from '../components/Error';
import Loading from '../components/Loading';
import Days from '../components/Days'

import setBg from '../functions/changeBg'
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
	this.seeDay = this.seeDay.bind(this);
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
	axios.get(`http://api.apixu.com/v1/forecast.json?key=e4c6948631f64f6f921180503191704&q=${lat},${lon}&days=7`)
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
		  windSpeed: res.data.current.wind_kph,
		  days: res.data.forecast.forecastday
		});
	  })
	  .then(() => {
		const hours = this.state.last_updated.split(' ')[1].split(':')[0];
		setBg(hours);
	  })
	  .catch(err => this.setState({err}));   
  }
  setLocation(lat, lon) {
	this.request(lat, lon);
	this.setState({show: 'none'});
  }
  seeDay(day) {
  	let curDay = day.day;
  	this.setState({
  		precip: curDay.totalprecip_in,
  		icon: curDay.condition.icon,
  		celsius: curDay.avgtemp_c,
  		fahrenheit: curDay.avgtemp_f,
  		clouds: curDay.condition.text,
  		humidity: curDay.avghumidity,
  		windSpeed: curDay.maxwind_kph,
  		last_updated: day.date
  	})
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
	const {location, currentLocation, last_updated, precip, icon, celsius, fahrenheit, clouds, humidity, windSpeed, err, show} = this.state;
	const locations = this.state.locations;
	const days = this.state.days;

	return (
	  	<main className="app">
		  	<Search 
				handleChange={this.handleChange}
				location={currentLocation}
				locations={locations}
				handleClick={this.setLocation}
				show={show}
		  	/>
		  	{location ? 
		  	<section className="app-main">
		  		<article>
		  			<Title location={location} updated={last_updated}/>
		  			<Content 
		  				clouds={clouds} 
		  				icon={icon} 
		  				celsius={celsius} 
		  				fahrenheit={fahrenheit} 
		  				humidity={humidity} 
		  				precip={precip} 
		  				windSpeed={windSpeed} 
		  			/>
		  		</article>
				
				<Days days={days} clickHandler={this.seeDay}/>
				<div className='info'>
					<sup>*</sup>Click on the date to see more details
				</div>
		  	</section>
		  	: err 
		  	? <Err message={'Ooops...something went wrong :('} />
		  	: <Loading message={'Fetching data...please wait'} />}

	  	</main>  
	);
  }
}

export default App;
