// forecast api key:
// 24b60d5f2a4b9edb6698a8a52522fce7


const yargs = require('yargs');
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

// using callback

var result = geocode.getGeocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));

        // get tempreture from forecast
        var forecastResult = forecast.getTempreture(results.lat, results.lng, (errorMessage, result) => {
            if (errorMessage) {
                console.log('Forecast error ==> ', errorMessage);
            }
            else {
                console.log(JSON.stringify(result, undefined, 3));
            }
        });
    }
});


