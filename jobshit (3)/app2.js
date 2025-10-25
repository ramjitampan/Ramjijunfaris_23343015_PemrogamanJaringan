// JobSheet 3 – HTTP Request and API
// Nama : Ramzy Junfaris
// NIM  : 23343015

const request = require('postman-request')

// Ambil nama kota dari argumen terminal
const kota = process.argv[2]

if (!kota) {
  console.log('⚠️ Masukkan nama kota setelah perintah, contoh:')
  console.log('   node app3.js Binjai')
  process.exit()
}

// 🔹 1. Ambil koordinat dari OpenStreetMap (Nominatim)
const urlLokasi = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
  kota
)}&format=json&limit=1`

request(
  {
    url: urlLokasi,
    json: true,
    headers: { 'User-Agent': 'RamzyJunfaris/1.0 (contact: ramzy@example.com)' },
  },
  (error, response) => {
    if (error) {
      return console.log('❌ Tidak dapat terhubung ke layanan lokasi!')
    } else if (!response.body || response.body.length === 0) {
      return console.log(`⚠️ Lokasi '${kota}' tidak ditemukan.`)
    }

    const lokasi = response.body[0]
    const latitude = lokasi.lat
    const longitude = lokasi.lon
    const namaLokasi = lokasi.display_name

    console.log(`✅ Koordinat ${kota} ditemukan!`)
    console.log(`   Latitude : ${latitude}`)
    console.log(`   Longitude: ${longitude}`)
    console.log('--------------------------------------')

    // 🔹 2. Ambil cuaca dari Weatherstack API
    const urlCuaca = `http://api.weatherstack.com/current?access_key=30e48ae5fc77feafa5f846e4d8af630c&query=${latitude},${longitude}&units=m`

    request({ url: urlCuaca, json: true }, (err, res) => {
      if (err) {
        console.log('❌ Tidak dapat terhubung ke layanan cuaca!')
      } else if (res.body.error) {
        console.log('⚠️ Terjadi kesalahan pada API Weatherstack:', res.body.error.info)
      } else {
        const cuaca = res.body.current
        console.log('🌤️ Informasi Cuaca:')
        console.log('--------------------------------------')
        console.log(`📍 Lokasi          : ${namaLokasi}`)
        console.log(`🌡️ Suhu            : ${cuaca.temperature}°C`)
        console.log(`☁️  Deskripsi       : ${cuaca.weather_descriptions[0]}`)
        console.log(`💧 Kelembaban      : ${cuaca.humidity}%`)
        console.log(`💨 Kecepatan Angin : ${cuaca.wind_speed} km/jam`)
        console.log('--------------------------------------')
      }
    })
  }
)
