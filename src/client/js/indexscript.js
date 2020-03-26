const $ = require("jquery");
import {
    getCity,
    getTripStart,
    getTripEnd,
    countdown
} from './utils'
import {
    showModal,
    displayTrip
} from './ui';





const trip = [];


/* Button handle functions */

const handleSearch = async (e) => {
    e.preventDefault();

    let city = getCity();
    let start = getTripStart();
    let end = getTripEnd();

    const postData = async (url = '', data = {}) => {
        const res = await fetch(url, {
            method: 'POST',
            Credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        return result;
    }

    const formData = {
        departtime: start,
        rertuntime: end,
        daysLeft: countdown(new Date(), start),
        city: city,
        duration: countdown(start, end)
    };

    const result = await postData('/data', formData);
    trip.all = result;
    console.log(trip.all)
    showModal(result)
}

const handleSave = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/save', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                trip: trip.all
            })
        });
        if (response.ok) {
            const jsonRes = await response.json();
            //console.log(jsonRes);
            displayTrip(jsonRes);




        }

    } catch (error) {


        console.log(error);
    }
}


const handleCancel = (e) => {
    e.preventDefault();

    $('#tripModal').modal('toggle');
    document.querySelector('.wrap-contact100').style.display = 'block';
}

export {
    handleSearch,
    handleSave,
    handleCancel
}