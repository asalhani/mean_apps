const request = require('request');
const yargs = require('yargs');

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

    var encodedAddress = encodeURIComponent(argv.address);
    //console.log(encodedAddress);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if(error){
        console.log("ERROR ==> Google Error", error);
    } else if(body.status === 'ZERO_RESULTS'){
        console.log('ERROR ==> Unable to find address');
    } else if(body.status === 'OK') {
         //console.log(JSON.stringify(body, undefined,3));
    //console.log(JSON.stringify(response, undefined, 3));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Location: lat: ${body.results[0].geometry.location.lat}, lng: ${body.results[0].geometry.location.lng}`)
    }
   
});