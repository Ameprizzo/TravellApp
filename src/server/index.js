const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');
const path = require('path')
const favicon = require('serve-favicon')
const app = express()


const getCoordinates = require('./getCoordinates');
const getWeather = require('./getWeather');
const getImage = require('./getImageURL');
const getCountry = require('./getCountryInfo');


app.use(favicon(path.join(__dirname, 'images', 'icons', 'favicon.ico')));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

const trips = [];
const weatherData = {};

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});


const port = process.env.PORT || 8000;
// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log(`App listening on port ${port}!`)

});

app.post('/save', (req, res) => {
  if (req.body !== " ") {
    const trip = req.body.trip;
    trips.push(trip);
    //console.log(trip);

    fs.writeFile("./data.json", JSON.stringify(trips), {
      flag: 'a+'
    }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Output saved to /data.json");
      }
    });
    // fs.readFile('./data.json', function (err, data) {
    //   console.log(JSON.parse(data));
    //   //Do whatever you want with JSON.parse(data)
    // });
    res.status(201).send(trip);

  } else {
    res.status(400).json('Bad Request');
  }
})

app.post('/data', function (req, res) {
  // console.log('Data received', req.body)
  departtime = req.body.departtime;
  returntime = req.body.rertuntime;
  inputCity = req.body.city;
  duration = req.body.duration;
  daysLeft = req.body.daysLeft;

  getCoordinates(inputCity)
    .then(function (data) {
      long = data[0];
      lat = data[1];
      country = data[2];
    })
    .then(() => getCountry(country))
    .then(function (data) {
      countryName = data.name;
      flag = data.flag;
      let stringArray = countryName.split(",");
      name = stringArray[0];
      // console.log(name)

    })
    .then(() => getWeather(long, lat))
    .then(function (data) {
      wsumary = data[0];
      wtemp = data[1];
      icon = data[2];
      console.log(wsumary, wtemp, icon)
    })
    .then(() => getImage(inputCity, name))
    .then(function (data) {

      imageurl = data;


      weatherData.imageurl = imageurl;
      weatherData.summary = wsumary;
      weatherData.temperature = wtemp;
      weatherData.icon = icon;
      weatherData.departtime = departtime;
      weatherData.returntime = returntime;
      weatherData.duration = duration;
      weatherData.daysLeft = daysLeft;
      weatherData.city = inputCity;
      weatherData.countryName = countryName;
      weatherData.flag = flag;

      // console.log(weatherData)

      res.send(weatherData)
    });


})

module.exports = app;