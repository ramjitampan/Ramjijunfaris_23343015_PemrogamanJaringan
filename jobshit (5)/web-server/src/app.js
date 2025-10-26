const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// perbaiki lokasi folder agar sesuai struktur kamu
const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));
const viewsDir = path.join(__dirname, '../view');
const partialsDir = path.join(__dirname, '../partials');

// setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs');
app.set('views', viewsDir);
hbs.registerPartials(partialsDir);

// folder public buat css, js, dan image
app.use(express.static(publicDir));

app.get('', (_, res) => {
    res.render('index', {
        title: 'Aplikasi Cek Cuaca',
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Ramzy Junfaris',
    });
});

app.get('/bantuan', (_, res) => {
    res.render('bantuan', {
        title: 'Bantuan',
        judul: 'Bantuan',
        nama: 'Ramzy Junfaris',
        teksBantuan: 'ini adalah teks bantuan'
    });
});

app.get('/infoCuaca', (_, res) => {
    res.send([
        {
            prediksiCuaca: 'Cuaca Sedang Hujan',
            lokasi: 'Padang'
        }
    ]);
});

app.get('/tentang', (_, res) => {
    res.render('tentang', {
        title: 'Tentang',
        judul: 'Tentang Saya',
        nama: 'Ramzy Junfaris',
    });
});

app.get('/bantuan/*', (_, res) => {
    res.render('404', {
        title: '404',
        judul: '404',
        nama: 'Ramzy Junfaris',
        pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
    });
});

app.get('*', (_, res) => {
    res.render('404', {
        title: '404',
        judul: '404',
        nama: 'Ramzy Junfaris',
        pesanKesalahan: 'yang betolah cees nyasar pula, gak ada halaman sini.'
    });
});

app.listen(4000, () => {
    console.log(`Server berjalan pada port 4000.`);
});
