$.simpleWeather({
    woeid: '455823',
    unit: 'c',
    success: function(weather) {
        $("#city").html(weather.city);
        $("#temperature").html(weather.wind.chill + '&deg; ' + weather.units.temp);
        $("#condition").html(weather.currently);
        $("#text").html(getAppText());
        $("body").css("background", colorMap[weather.code]);
    },
    error: function(error) {
        $("#weather").html('<p>' + error + '</p>');
    }
});

getAppText = function(condition, temperature) {
    return "test";
}

colorMap = {
    0: '#2c3e50',
    1: '#2c3e50',
    2: '#2c3e50',
    3: '#2c3e50',
    4: '#2c3e50',
    5: '#2c3e50',
    6: '#2c3e50',
    7: '#2c3e50',
    8: '#2c3e50',
    9: '#2c3e50',
    10: '#2c3e50',
    11: '#2c3e50',
    12: '#2c3e50',
    13: '#2c3e50',
    14: '#2c3e50',
    15: '#2c3e50',
    16: '#2c3e50',
    17: '#2c3e50',
    18: '#2c3e50',
    19: '#2c3e50',
    20: '#2c3e50',
    21: '#2c3e50',
    22: '#2c3e50',
    23: '#2c3e50',
    24: '#2c3e50',
    25: '#2c3e50',
    26: '#2c3e50',
    27: '#2c3e50',
    28: '#2c3e50',
    29: '#2c3e50',
    30: '#2c3e50',
    31: '#2c3e50',
    32: '#2c3e50',
    33: '#2c3e50',
    34: '#2c3e50',
    35: '#2c3e50',
    36: '#2c3e50',
    37: '#2c3e50',
    38: '#2c3e50',
    39: '#2c3e50',
    40: '#2c3e50',
    41: '#2c3e50',
    42: '#2c3e50',
    43: '#2c3e50',
    44: '#2c3e50',
    45: '#2c3e50',
    46: '#2c3e50',
    47: '#2c3e50',
    3200: '#2c3e50'
}

// 0   tornado
// 1   tropical storm
// 2   hurricane
// 3   severe thunderstorms
// 4   thunderstorms
// 5   mixed rain and snow
// 6   mixed rain and sleet
// 7   mixed snow and sleet
// 8   freezing drizzle
// 9   drizzle
// 10  freezing rain
// 11  showers
// 12  showers
// 13  snow flurries
// 14  light snow showers
// 15  blowing snow
// 16  snow
// 17  hail
// 18  sleet
// 19  dust
// 20  foggy
// 21  haze
// 22  smoky
// 23  blustery
// 24  windy
// 25  cold
// 26  cloudy
// 27  mostly cloudy (night)
// 28  mostly cloudy (day)
// 29  partly cloudy (night)
// 30  partly cloudy (day)
// 31  clear (night)
// 32  sunny
// 33  fair (night)
// 34  fair (day)
// 35  mixed rain and hail
// 36  hot
// 37  isolated thunderstorms
// 38  scattered thunderstorms
// 39  scattered thunderstorms
// 40  scattered showers
// 41  heavy snow
// 42  scattered snow showers
// 43  heavy snow
// 44  partly cloudy
// 45  thundershowers
// 46  snow showers
// 47  isolated thundershowers
// 3200    not available