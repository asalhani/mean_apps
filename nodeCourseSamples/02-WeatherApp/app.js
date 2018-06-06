const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=3668%20Uthman%20Al%20Harqumi,%20As%20Sulimaniyah',
    json: true
},(error, response, body) =>{
    console.log(JSON.stringify(body, undefined,3));
});