async function getCoordnates(cityName) {
    //console.log(cityName)
    const dotenv = require('dotenv');
    dotenv.config();
    const fetch = require('node-fetch')

    const baseURL = process.env.geonamesUrl;
    const username = process.env.geonamesUsername;

    const result = await fetch(`${baseURL}${cityName}&maxRows=10&username=${username}`);
    const error = "Failed to connect to the API";

    try {
        const data = await result.json();
        const long = data.geonames[0].lng;
        const lat = data.geonames[0].lat;
        const countryCode = data.geonames[0].countryCode;

        return [long, lat, countryCode];

    } catch (error) {
        console.log("error", error);

    }

}

module.exports = getCoordnates