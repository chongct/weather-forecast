const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: process.env.LATLNG_API_KEY });

function info() {
  return `Testing link`;
}

async function apiQuery(parent, args, ctx, info) {
  // api to get latitude and longitude
  const { field } = args;
  const { lat, lng } = await latLngApi(field);

  // API to get weather results
  const API_URL = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${lat},${lng}?units=si`;
  const response = await fetch(API_URL);
  const result = await response.json();
  // console.log(result);

  let weatherForecastArray = []
  for (let dayIndex = 1; dayIndex < (result.daily.data.length - 1); dayIndex++) {
    weatherForecastArray.push({
      time: result.daily.data[dayIndex].time,
      summary: result.daily.data[dayIndex].summary,
      icon: result.daily.data[dayIndex].icon,
      temperatureMin: result.daily.data[dayIndex].temperatureMin,
      temperatureMax: result.daily.data[dayIndex].temperatureMax
    });
  }

  return {
    result: {
      time: result.currently.time,
      summary: result.currently.summary,
      icon: result.currently.icon,
      precipProbability: result.daily.data[0].precipProbability,
      temperature: result.currently.temperature,
      windSpeed: result.currently.windSpeed,
      dailySummary: result.daily.data[0].summary
    },
    forecast: weatherForecastArray
  };
}

// API to get latitude and longitude from searched location
function latLngApi(field) {
  return new Promise((resolve, reject) => {
    geocodingClient
    .forwardGeocode({
      query: field,
      limit: 2
    })
    .send()
    .then(response => {
      const match = response.body;
      // console.log(match.features[0]);
      resolve({
        lat: match.features[0].center[1],
        lng: match.features[0].center[0]
      });
    });
  });
}

module.exports = {
  info,
  apiQuery,
  latLngApi
}
