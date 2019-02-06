const chai = require('chai');

const path = require('path');
const dotEnvPath = path.resolve('./.env');
require('dotenv').config({ path: dotEnvPath });
const queryTest = require('../src/resolvers/Query');

const expect = chai.expect;

require('isomorphic-fetch');

describe("Sample test", function() {
  it("should run a sample test against a sample resolver function", function(done) {
    expect(queryTest.info()).equal("Testing link");
    done();
  })
});

describe("Latitude longitude API test", function() {
  it("should perform a Latitude longitude API call given a location", async function() {
    const data = await queryTest.latLngApi("singapore");
    expect(data).to.be.an("object");
    expect(data).to.have.property("lat");
    expect(data).to.have.property("lng");
    expect(data.lat).to.be.a("number");
    expect(data.lng).to.be.a("number");
  });
});

describe("Weather forecast API test", function() {
  it("should perform a Weather forecast API call given a location", async function() {
    const data = await queryTest.apiQuery(null, {"field": "singapore"}, null, null);
    expect(data).to.be.an("object");
    expect(data).to.have.property("result");
    expect(data).to.have.property("forecast");
    expect(data.result.time).to.be.a("number");
    expect(data.result.summary).to.be.a("string");
    expect(data.result.icon).to.be.a("string");
    expect(data.result.precipProbability).to.be.a("number");
    expect(data.result.temperature).to.be.a("number");
    expect(data.result.windSpeed).to.be.a("number");
    expect(data.result.dailySummary).to.be.a("string");
    expect(data.forecast).to.be.an("array");
  });
});
