function info() {
  return `Testing link`
}

async function weatherApi() {
  const API_URL = `https://api.darksky.net/forecast/${process.env.API_KEY}/1.3451042,103.9200074`
  const response = await fetch(API_URL)
  const result = await response.json()
  console.log(result)
  return {
    summary: result.currently.summary,
    temperature: result.currently.temperature
  }
}

module.exports = {
  info,
  weatherApi
}
