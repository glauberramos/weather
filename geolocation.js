weather = {};
weather.getLocation = (function () {

	var callback;
	var result;
	var getLocationSuccess = function (data) {
		result.lat = data.coords.latitude;
		result.lon = data.coords.longitude;
		callback(result);
	};

	var getLocationError = function (error) {
		var msg;
		switch (error.code) {
		case error.PERMISSION_DENIED:
			msg = 'User denied request for geolocation';
			break;
		case error.POSITION_UNAVAILABLE:
			msg = 'Could not get location';
			break;
		case error.TIMEOUT:
			msg = 'Request for location timed out';
			break;
		case error.UNKNOWN_ERROR:
			msg = 'FUCK THIS, I\'M GOING HOME';
			break;
		}

		result.error = {};
		result.error.code = error.code;
		result.error.message = msg;
		callback(result);
	};

	return function (cb) { 
		result = {};
		callback = cb;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
		} else {
			callback({ 'code' : 0, 'message' : 'User\'s browser does not support geolocation' });
		}
	}

}());

window.weather = weather;
