# Capstone Travel-App

This simple travelling app let you plan your trips,it allow you to  enter the desired trip location and both depature date and returning date and thereafter will display the current weather or weather forecast depending on the trip date and an image of the location using information obtained from external APIs.

## Table of Contents


a. [API(s) Used](#apis(s)-used)
b. [Development Strategy](#development-strategy)
c. [Additional Features](#additional-features)
d. [Getting Started](#getting-started) 
e. [Built With](#built-with)
f. [Test](#test)
g. [Aknowledgement](#aknowlwdgment)


### API(s) Used

1. [Geonames API](http://www.geonames.org/export/web-services.html) - Geographical database from which the location data is pulled
2. [DarkSky API](https://darksky.net/dev) - Weather API for current and future weather data
3. [Pixabay API](https://pixabay.com/api/docs/) - RESTful interface for searching and retrieving free images and videos

## Additional Features

1. Add end date and display length of the trip
2. Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
3. Integrate the REST Countries API to pull in data for the country being visited.
4. Users can review the trip info and cancel before saving it.

## Getting Started

1. Download or clone the project:
```
https://github.com/Ameprizzo/TravellApp.git
```
2. Install dependencies
```
npm install 
```
3. Start the server
```
npm start
```
4. Setup the environment development or production
```
npm run build-dev
```
or 
```
npm run build-prod
```
5. Test with Jest
```
npm run test
```

## Built With

* [Bootstrap](https://getbootstrap.com/) - The CSS framework used 
* [Sass](https://sass-lang.com/documentation) - The web framework used
* [Webpack](https://webpack.js.org/concepts/) - Asset Management
* [Babel](https://babeljs.io/) - JavaScript Compiler
* [Node.js](https://nodejs.org/en/) - JavaScript Runtime
* [Express.js](https://expressjs.com/) - Server Framework for Node.js
* [Jest](https://jestjs.io/) - Testing suit
* [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers) - For offline capability

## Test

To test the application, run
```
npm run test
```

## Aknowledgement
Udacity.com
