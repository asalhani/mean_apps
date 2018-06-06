const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=3668%20Uthman%20Al%20Harqumi,%20As%20Sulimaniyah',
    json: true
},(error, response, body) =>{
     //console.log(JSON.stringify(body, undefined,3));
    //console.log(JSON.stringify(response, undefined, 3));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Location: lat: ${body.results[0].geometry.location.lat}, lng: ${body.results[0].geometry.location.lng}`)
});