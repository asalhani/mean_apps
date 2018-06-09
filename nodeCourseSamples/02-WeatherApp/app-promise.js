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

// using promisses
geocode.getGeocodeAddressAsync(argv.address)
    .then((result => {
        console.log(result);
        debugger
        return forecast.getTempretureAsync(result.lat, result.lng);
    })).then((result) =>{
        console.log(result);
    }).catch((errorMessage) => {
        console.log(errorMessage);
    });
