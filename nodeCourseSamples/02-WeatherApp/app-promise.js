// forecast api key:
// 24b60d5f2a4b9edb6698a8a52522fce7


const yargs = require('yargs');
const axios = require('axios');
const geocode = require('./geocode/geocode.js');
const forecast = require('./geocode/forecast');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch wather for',
        string: true
    }
})
    .help()
    .alias('help', 'h')
    .argv;

// console.log(argv);

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

// make axos request
axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find address..');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/24b60d5f2a4b9edb6698a8a52522fce7/${lat},${lng}`;
    return axios.get(weatherUrl);
}).then((weatherResponse) =>{
    console.log(weatherResponse.data.currently.temperature);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to Google maps API..');
    }
    else {
        console.log(e.message);
    }

});