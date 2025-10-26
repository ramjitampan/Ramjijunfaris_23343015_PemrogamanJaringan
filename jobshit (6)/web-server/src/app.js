const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/prediksiCuaca');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = express();

// Lokasi folder utama
const publicDir = path.join(__dirname, '../public');
const viewsDir = path.join(__dirname, '../view');
const partialsDir = path.join(__dirname, '../partials');

// Setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs');
app.set('views', viewsDir);
hbs.registerPartials(partialsDir);

// Folder public untuk file CSS, JS, dan gambar
app.use(express.static(publicDir));

// Halaman utama
app.get('', (_, res) => {
    res.render('index', {
        title: 'Aplikasi Cek Cuaca',
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Ramzy Junfaris',
        nim: '23343015'
    });
});

// Halaman bantuan
app.get('/bantuan', (_, res) => {
    res.render('bantuan', {
        title: 'Bantuan',
        judul: 'Bantuan',
        nama: 'Ramzy Junfaris',
        nim: '23343015',
        teksBantuan: 'Ini adalah teks bantuan yang dapat membantumu menggunakan aplikasi dengan mudah.'
    });
});

app.get("/infoCuaca", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "Kamu harus memasukkan lokasi yang ingin dicari." });
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) return res.send({ error });

    forecast(latitude, longitude, (error, dataPrediksi) => {
      if (error) return res.send({ error });

      res.send({
        lokasi: location,
        prediksiCuaca: dataPrediksi,
        address: req.query.address,
      });
    });
  });
});


// Halaman tentang
app.get('/tentang', (_, res) => {
    res.render('tentang', {
        title: 'Tentang',
        judul: 'Tentang Saya',
        nama: 'Ramzy Junfaris',
        nim: '23343015',
        deskripsi: 'Saya adalah mahasiswa yang sedang mempelajari Node.js dan pengembangan aplikasi berbasis web.'
    });
});

// Jika sub-halaman bantuan tidak ditemukan
app.get('/bantuan/*', (_, res) => {
    res.render('404', {
        title: '404',
        judul: '404',
        nama: 'Ramzy Junfaris',
        nim: '23343015',
        pesanKesalahan: 'artikel ngwaor, kutengok gak ketemu.'
    });
});

// Halaman tidak ditemukan
app.get('*', (_, res) => {
    res.render('404', {
        title: '404',
        judul: '404',
        nama: 'Ramzy Junfaris',
        nim: '23343015',
        pesanKesalahan: 'YANG BETOLAH CEES ENTAH APA APA KAU CARI, GAK ADA DISINI.'
    });
});

// Jalankan server
app.listen(4000, () => {
    console.log(`Server berjalan pada port 4000.`);
});