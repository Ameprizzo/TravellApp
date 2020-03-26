import {
  countdown
} from "./utils";
import 'bootstrap';
import 'jquery';
const $ = require("jquery");




const getTripDate = (date) => {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const tripDate = new Date(date);
  const tripDateText = `${days[tripDate.getDay()]}, ${months[tripDate.getMonth()]} ${tripDate.getDate()}, ${tripDate.getFullYear()}`;

  return tripDateText;
}


const showModal = (trip) => {

  document.querySelector('.wrap-contact100').style.display = 'none';

  $('#tripModal').modal({
    keyboard: false
  })

  document.querySelector('.trip_title').innerHTML = `<img src="${trip.flag}" class="flag"> ${trip.city}, ${trip.countryName}`;

  // Display location, dates and the duration
  document.querySelectorAll('.media_heading')[0].innerText = `${trip.city}, ${trip.countryName}`;

  //
  const tripStart = getTripDate(trip.departtime);
  const tripEnd = getTripDate(trip.returntime);
  document.querySelectorAll('.media_heading')[1].innerText = tripStart;
  document.querySelectorAll('.media_heading')[2].innerText = tripEnd;

  document.querySelectorAll('.media_heading')[3].innerText = `${countdown(trip.departtime, trip.returntime)} days`;

  // Display trip images
  // const imageURL = await getTripImageURL(images);
  document.querySelector('.images').setAttribute('src', trip.imageurl);

  // Display the days left to trip
  const daysLeft = countdown(new Date(), trip.departtime);
  document.querySelector('.trip_countdown').innerText = `Your trip to ${trip.city} is ${daysLeft} days away`;

  // Display weather info

  document.querySelector('.trip_weather').innerHTML = `<p class="mt-1">The current weather:</p>
                                                       <p class="mt-1">${trip.temperature}&deg;C</p>
                                                       <p class="mt-1">${trip.summary}</p>`;


}

const displayTrip = (trip) => {


  // document.querySelector('.caption').style.display = 'block';
  // document.querySelector('.caption').style.top = '5vh';

  $('#tripModal').modal('toggle');

  const tripStart = getTripDate(trip.departtime);
  const tripEnd = getTripDate(trip.returntime);
  const daysLeft = countdown(new Date(), trip.departtime);


  const section = document.createElement('section');
  section.classList.add('trips');

  const div = document.createElement('div');


  div.innerHTML = `
  <div class="card p-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${trip.imageurl}" class="card-img" alt="Picture of Travel Destination">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title trip_title"><img src="${trip.flag}" class="flag"> ${trip.city}, ${trip.countryName}</h3>
          <h6 class="mt-0">Departure: ${tripStart}</h6>
          <h6 class="mt-0">Return: ${tripEnd}</h6>
          <h6 class="mt-0">Duration: ${countdown(trip.departtime, trip.returntime)} days</h6>
          <span class="trip_countdown">Your trip to ${trip.city} is ${daysLeft} days away</span>
          <p>The current weather:</p>
          <p>${trip.temperature}&deg;C</p>
          <p>${trip.summary}</p>
        </div>
        <a href = "/">
         <button type = "button" class = "btn btn-success btn-lg">
          <span>
          PLAN ANOTHER TRIP
          <i class = "fa fa-plane" aria-hidden = "true"> </i> </span> 
          </button>
          </a>
      </div>
    </div>
  </div>`;

  section.appendChild(div);
  document.querySelector('.container-contact100').appendChild(section);
}

export {
  showModal,
  displayTrip
};