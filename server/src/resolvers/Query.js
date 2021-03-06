const latLngApi = require('../helpers/latLngApi');

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
      windBearing: result.currently.windBearing,
      dailySummary: result.daily.data[0].summary
    },
    forecast: weatherForecastArray
  };
}

module.exports = {
  info,
  apiQuery
}
