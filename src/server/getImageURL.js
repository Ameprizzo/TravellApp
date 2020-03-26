async function getImageURL(cityName, country) {

    require('dotenv').config();
    const fetch = require('node-fetch');
    const baseURL = process.env.pixabayURL;
    const api_key = process.env.pixabayKey;


    const queryCity = `&q=${cityName}&image_type=photo&pretty=true&category=places`;
    const queryCountry = `&q=${country}&image_type=photo&pretty=true&category=places`

    const cityEndpoint = baseURL + api_key + queryCity;
    const countryEndpoint = baseURL + api_key + queryCountry;
    try {
        let response = await fetch(cityEndpoint);
        if (response.ok) {
            let jsonRes = await response.json();
            if (jsonRes.totalHits === 0) {
                // If not, display pictures for the country
                response = await fetch(countryEndpoint);
                if (response.ok) {
                    jsonRes = await response.json();
                    //console.log(jsonRes.hits[0].largeImageURL);
                    return jsonRes.hits[0].largeImageURL;
                }
            }
            // console.log(jsonRes);
            // console.log(jsonRes.hits[0].largeImageURL);
            return jsonRes.hits[0].largeImageURL;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = getImageURL