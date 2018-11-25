const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
const geocodingClient = mbxGeocoding({ accessToken: process.env.LATLNG_API_KEY })

function info() {
  return `Testing link`
}

async function apiQuery(parent, args, ctx, info) {
  // api to get latitude and longitude
  const { field } = args
  const { lat, lng } = await latLngApi(field)

  // api to get weather
  const API_URL = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${lat},${lng}?units=si`
  const response = await fetch(API_URL)
  const result = await response.json()
  console.log(result)
  return {
    summary: result.currently.summary,
    temperature: result.currently.temperature
  }
}

function latLngApi(field) {
  return new Promise((resolve, reject) => {
    geocodingClient
    .forwardGeocode({
      query: field,
      limit: 2
    })
    .send()
    .then(response => {
      const match = response.body
      // console.log(match.features[1].center[1])
      resolve({
        lat: match.features[1].center[1],
        lng: match.features[1].center[0]
      })
    })
  })
}

module.exports = {
  info,
  apiQuery
}
