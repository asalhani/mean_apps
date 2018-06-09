const request = require('request');

const _API_KEY = '24b60d5f2a4b9edb6698a8a52522fce7'

var getTempreture = (lat, lng, callback) => {
    var url = `https://api.darksky.net/forecast/24b60d5f2a4b9edb6698a8a52522fce7/${lat},${lng}`;

    request({
        url: url,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("ERROR ==> Forecast Error" + error);
        } else if (body.code === 400) {
            callback('ERROR ==> Location invalid');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature
            });
        }

    });
}

var getTempretureAsync = (lat, lng) => {
    return new Promise((resolve, reject) => {
        var url = `https://api.darksky.net/forecast/24b60d5f2a4b9edb6698a8a52522fce7/${lat},${lng}`;

        request({
            url: url,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("ERROR ==> Forecast Error" + error);
            } else if (body.code === 400) {
                reject('ERROR ==> Location invalid');
            } else if (response.statusCode === 200) {
                resolve({
                    temperature: body.currently.temperature
                });
            }
        });
    });
}

module.exports = {
    getTempreture,
    getTempretureAsync
}