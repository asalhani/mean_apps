
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')

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

console.log(argv);

var result = geocode.getGeocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});
// console.log(`Address: ${result.formatted_address}`);
// console.log(`Location: lat: ${result.geometry.location.lat}, lng: ${result.geometry.location.lng}`)



    //console.log(encodedAddress);

