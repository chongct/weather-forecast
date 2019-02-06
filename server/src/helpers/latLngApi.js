const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: process.env.LATLNG_API_KEY });

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

module.exports = latLngApi;
