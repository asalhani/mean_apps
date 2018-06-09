const request = require('request');

var getGeocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("ERROR ==> Google Error" + error);
        } else if (body.status === 'ZERO_RESULTS') {
            callback('ERROR ==> Unable to find address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }

    });
}

var getGeocodeAddressAsync = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("ERROR ==> Google Error" + error);
            } else if (body.status === 'ZERO_RESULTS') {
                reject('ERROR ==> Unable to find address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng
                });
            }
        });
    });
}

module.exports = {
    getGeocodeAddress,
    getGeocodeAddressAsync
};



