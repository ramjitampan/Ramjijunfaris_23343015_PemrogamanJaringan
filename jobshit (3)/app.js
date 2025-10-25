// JobSheet 3 – HTTP Request and API
// Nama : Ramzy Junfaris
// NIM  : 23343015
// Asal : Binjai, Sumatera Utara

const request = require('postman-request')

// Ambil nama kota dari argumen terminal
const kota = process.argv[2]

// Jika user tidak memasukkan nama kota
if (!kota) {
    console.log('⚠️ Masukkan nama kota setelah perintah, contoh:')
    console.log('   node app.js Medan')
} else {
    // Gunakan backtick agar ${kota} bisa terbaca
    const url = `http://api.weatherstack.com/current?access_key=30e48ae5fc77feafa5f846e4d8af630c&query=${encodeURIComponent(kota)}&units=m`

    // Kirim request ke API dengan format JSON otomatis
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log('❌ Tidak dapat terhubung ke layanan cuaca!')
        } 
        else if (response.body.error) {
            console.log('⚠️ Terjadi kesalahan pada API:', response.body.error.info)
        } 
        else {
            const data = response.body
            const lokasi = data.location.name
            const suhu = data.current.temperature
            const deskripsi = data.current.weather_descriptions[0]
            const kelembaban = data.current.humidity
            const kecepatanAngin = data.current.wind_speed

            console.log('🌤️ Informasi Cuaca dari Weatherstack:')
            console.log('--------------------------------------')
            console.log(`📍 Lokasi          : ${lokasi}`)
            console.log(`🌡️ Suhu            : ${suhu}°C`)
            console.log(`☁️  Deskripsi       : ${deskripsi}`)
            console.log(`💧 Kelembaban      : ${kelembaban}%`)
            console.log(`💨 Kecepatan Angin : ${kecepatanAngin} km/jam`)
            console.log('--------------------------------------')
        }
    })
}
