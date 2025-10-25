// app.js
const fs = require('fs')

// 🔹 Modul pihak ketiga
const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')

// 🔹 Modul buatan sendiri
const ambilCatatan = require('./catatan.js')

// 🧾 Menulis file baru
fs.writeFileSync('catatan.txt', 'Nama Saya Ramzy Junfaris dari Binjai, Sumatera Utara (NIM: 23343015)')

// 🟣 Menampilkan pesan dari file catatan.js
const pesan = ambilCatatan()
console.log(chalk.cyan(pesan))

// 🟢 Mengecek URL valid
const urlValid = validator.isURL('https://ramzyjunfaris.com')
if (urlValid) {
  console.log(chalk.blue.bold('✅ Sukses: URL valid!'))
} else {
  console.log(chalk.red.bold('❌ Gagal: URL tidak valid!'))
}

// 💚 Contoh variasi warna
console.log(chalk.green.inverse('Print warna hijau sukses!'))

// 🟠 Menangani argumen baris perintah sederhana
const command = process.argv[2]
if (command === 'tambah') {
  console.log(chalk.yellow('Tambah Catatan'))
} else if (command === 'hapus') {
  console.log(chalk.red('Hapus Catatan'))
} else {
  console.log(chalk.gray('Perintah tidak dikenal'))
}

// 💜 Integrasi yargs (untuk latihan berikutnya)
yargs.version('10.1.0')

yargs.command({
  command: 'tambah',
  describe: 'Tambah sebuah catatan baru',
  handler: function () {
    console.log(chalk.green('Sebuah catatan baru ditambahkan!'))
  }
})

yargs.command({
  command: 'hapus',
  describe: 'Hapus catatan',
  handler: function () {
    console.log(chalk.red('Catatan berhasil dihapus'))
  }
})

yargs.parse()

// ✨ Pesan akhir program
console.log(chalk.magenta.inverse('Program Otomatis Jalan Lagi!'))
