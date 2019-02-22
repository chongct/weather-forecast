# Weather Forecast Application [![Build Status](https://travis-ci.com/chongct/weather-forecast.svg?branch=master)](https://travis-ci.com/chongct/weather-forecast) [![Coverage Status](https://coveralls.io/repos/github/chongct/weather-forecast/badge.svg?branch=master)](https://coveralls.io/github/chongct/weather-forecast?branch=master) [![HitCount](http://hits.dwyl.io/chongct/weather-forecast.svg)](http://hits.dwyl.io/chongct/weather-forecast)

This is a simple weather forecast application.

Live version: https://chongct-weather.herokuapp.com/

## Getting Started
### How to Use
* Fork and clone this repository.
* Run ```yarn install``` to install dependencies.
* To start project in development mode, run ``` yarn dev```.
* To start project in production mode, run ```yarn build``` first, then ```yarn start```.
* To run tests, run ```yarn test```.

### How to Use Docker Image
* Run ```yarn install``` and ```yarn build``` to create React build files.
* Run ```docker build -t <image name> .``` to build Docker image.
* Run ```docker run -p 4000:4000 --env-file <path/to/.env file> <image name>``` to start running Docker image.
* Application can be accessed at <http://localhost:4000>.

## Built With
* React / Redux
* SCSS
* Bootstrap
* GraphQL
* Node.js
* Dark Sky API
* Mapbox API
* Mocha, Chai, Jest, Enzyme
* Travis CI
* Heroku
* Gulp
* Docker
