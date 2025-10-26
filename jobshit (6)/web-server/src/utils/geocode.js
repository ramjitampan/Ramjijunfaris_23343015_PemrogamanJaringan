const request = require('postman-request');

const geocode = (address, callback) => {
    const place = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?q=${place}&format=json&limit=1`;

    request({ url, json: true, headers: { 'User-Agent': 'NodeWeatherApp' } },
        (err, res) => {
            if (err) {
                callback('Tidak dapat terhubung ke layanan lokasi!', undefined);
            } else if (!res.body || res.body.length === 0) {
                callback('Lokasi tidak ditemukan!', undefined);
            } else {
                callback(undefined, {
                    latitude: res.body[0].lat,
                    longitude: res.body[0].lon,
                    location: res.body[0].display_name
                });
            }
        }
    );
};

module.exports = geocode;
