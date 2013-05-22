function YQLQuery(query, callback) {
	this.query = query;
	this.callback = callback || function(){};
	this.fetch = function() {

		if (!this.query || !this.callback) {
			throw new Error('YQLQuery.fetch(): Parameters may be undefined');
		}

		var scriptEl = document.createElement('script'),
            uid = 'yql' + +new Date(),
            encodedQuery = encodeURIComponent(this.query.toLowerCase()),
            instance = this;

		YQLQuery[uid] = function(json) {
			instance.callback(json);
			delete YQLQuery[uid];
			document.body.removeChild(scriptEl);
		};

		scriptEl.src = 'http://query.yahooapis.com/v1/public/yql?q='
            + encodedQuery + '&format=json&callback=YQLQuery.' + uid; 
		document.body.appendChild(scriptEl);

	}
};

weather.yahoo = {};
weather.yahoo.getLocation = (function () {
	
	// Yahoo specific stuff
	var callback;
	var yahooCallback = function (data) {
		if (data.query.count > 0) {
			var woeid = data.query.results.Result.woeid;
			callback({ 'woeid' : woeid });
		} else {
			callback({ 'code' : 0, 'message' : 'No WOEID found for provided coordinates' });
		}
	};


	var getWoeid = function (data) {
		if (!data.err) {
			var query = 'SELECT * FROM geo.placefinder WHERE text="' + data.lat + ',' + data.lon + '" AND gflags="R"';
			var yql = new YQLQuery(query, yahooCallback);
			yql.fetch();
		} else {
			callback({ 'code' : 0, 'message' : 'Data to retrieve WOEID was corrupted' });
		}
	};

	// weather.geolocation speficic stuff

	var geolocationCallback = function (data) {
		getWoeid(data);
	};
	

	return function (cb) {
		callback = cb;
		weather.getLocation(geolocationCallback);
	};

}());

callback = function (data) { alert(data.woeid); };
weather.yahoo.getLocation(callback);
