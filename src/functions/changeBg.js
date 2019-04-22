const changeBg = (hours) => {
	const body = document.getElementById('body');
	if (hours > 6 && hours <= 11) {
	  body.style.backgroundImage = "url('https://i.ytimg.com/vi/-EMn-ePp7Uw/maxresdefault.jpg')";
	} else if (hours > 11 && hours < 19) {
	  body.style.backgroundImage = "url('http://ohauitiweather.co.nz/forecast/javascript-premium-weather-widget/bins/assets/bg-partly-cloudy-day.jpg')";
	} else if (hours >=19 && hours < 21) {
	  body.style.backgroundImage = "url('https://static1.squarespace.com/static/56fc43941bbee06b29adcfb0/t/56fc870c22482e417c98e93d/1459390232228/unnamed-32.jpg?format=1500w')";
	} else {
	  body.style.backgroundImage = "url('http://pluspng.com/img-png/png-night-sky-night-sky-bg-png-1500.png')";
	}
}

export default changeBg;