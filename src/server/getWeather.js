async function getWeatherForecast(long, lat) {
    //console.log(long, lat)
    const dotenv = require('dotenv');
    dotenv.config();
    const fetch = require('node-fetch');

    const baseURL = process.env.WEATHER_URL;
    const apikey = process.env.WEATHER_API_KEY;
    const result = await fetch(`${baseURL}${apikey}/${lat},${long}?units=si`);
    try {
        const data = await result.json();
        const weathersum = data.currently.summary;
        const temp = data.currently.temperature;
        const icon = data.currently.icon;


        return [weathersum, temp, icon];

    } catch (error) {
        console.log("error", error);

    }

}

module.exports = getWeatherForecast