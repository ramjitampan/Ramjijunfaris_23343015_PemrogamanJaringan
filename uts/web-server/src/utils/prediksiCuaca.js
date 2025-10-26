const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const lat = encodeURIComponent(latitude);
    const lon = encodeURIComponent(longitude);

    const url = `http://api.weatherstack.com/current?access_key=ba8874e9252177686499a4c730340371&query=${lat},${lon}&units=m`;

    request({ url, json: true }, (err, res) => {
        if (err) {
            return callback('Tidak dapat terkoneksi ke layanan cuaca!', undefined);
        } else if (res.body.error) {
            return callback('Tidak bisa menemukan data cuaca untuk lokasi tersebut!', undefined);
        }

        const { current } = res.body;
        callback(undefined, {
            deskripsi: current.weather_descriptions[0],
            suhu: current.temperature,
            terasa: current.feelslike,
            angin: current.wind_speed,
            kelembapan: current.humidity
        });
    });
};

module.exports = forecast;
