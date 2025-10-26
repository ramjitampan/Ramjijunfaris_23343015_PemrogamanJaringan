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

app.get('/berita', (_, res) => {
    res.render('berita', {
        title: 'Berita',
        judul: "Berita Terkini",
        nama: 'Ramzy Junfaris',
    });
});

app.get('/getBerita', async (_, res) => {
    const limit = 9;
    const offset = 0;
    const API_KEY = '2b0fd13555ab015c62137208dee22679';
    const BASE_URL = 'https://api.mediastack.com/v1/news';

    try {
        // Ambil berita umum dan lingkungan tapi aman
        const url = `${BASE_URL}?access_key=${API_KEY}&categories=general,science,health&keywords=weather,climate,environment&limit=${limit}&offset=${offset}&languages=en`;

        console.log('Requesting:', url);

        const response = await fetch(url);
        const data = await response.json();

        if (!data.data) {
            console.error('API error:', data);
            return res.send({ error: data.error || 'Tidak ada data berita.' });
        }

        // filter biar gak ada berita yang nyerempet hal-hal dewasa soalnya ambil berita luar di indonesia lagi kosong
        const beritaAman = data.data.filter(item =>
            item.title && !/sex|porn|adult|bkp|xxx|nude/i.test(item.title)
        );

        const beritaDenganGambar = beritaAman.filter(item => item.image);

        res.send({
            data: beritaDenganGambar,
            pagination: data.pagination,
        });
    } catch (err) {
        console.error('Fetch gagal:', err);
        res.send({ error: 'Gagal mengambil berita cuaca' });
    }
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