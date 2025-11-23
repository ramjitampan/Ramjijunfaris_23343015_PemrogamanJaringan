# 📘 JobShit 8 – MongoDB & NoSQL Databases  
Praktikum Pemrograman Jaringan – Ramzy Junfaris (23343015)

JobShit ini berfokus pada pengenalan **MongoDB**, salah satu database NoSQL yang populer dan banyak digunakan pada aplikasi modern, terutama yang membutuhkan fleksibilitas tinggi, skalabilitas, dan performa cepat.

---

## 🔍 Apa Itu NoSQL?
**NoSQL (Not Only SQL)** adalah pendekatan penyimpanan data yang tidak menggunakan struktur tabel seperti database relasional (MySQL, PostgreSQL).  
NoSQL menyimpan data dalam format yang lebih fleksibel, seperti:

- 🟦 **Document** (contoh: MongoDB – JSON/BSON)
- 🟩 **Key-Value**
- 🟧 **Columnar**
- 🟪 **Graph**

NoSQL cocok digunakan ketika:
- struktur data tidak kaku,
- aplikasi membutuhkan skalabilitas besar,
- dan ketika performa baca-tulis harus sangat cepat.

---

## 🍃 Apa Itu MongoDB?
**MongoDB** adalah database NoSQL berbasis *document* yang menyimpan data dalam bentuk dokumen mirip JSON.

Contoh struktur dokumen MongoDB:

```json
{
  "_id": "ObjectId()",
  "nama": "Ramzy Junfaris H",
  "usia": 20
}
MongoDB memiliki keunggulan:

Struktur data fleksibel (schema-less)

Mudah di-scale secara horizontal

Query mirip JSON → intuitif

Integrasi sangat mudah dengan Node.js

📌 Isi JobShit 8
Dalam JobShit ini, dilakukan implementasi CRUD (Create, Read, Update, Delete) pada MongoDB menggunakan Node.js.

Struktur folder:

java
Salin kode
jobshit (8)
│
├── insertDocument.js   → Menambah data (Create)
├── readDocument.js     → Membaca data (Read)
├── updateDocument.js   → Memperbaharui data (Update)
├── deleteDocument.js   → Menghapus data (Delete)
└── package.json         → Konfigurasi modul
✨ 1. CREATE (Insert Document)
Pada tahap ini dilakukan proses memasukkan data ke:

Collection pengguna

Collection tugas

Menggunakan:

js
Salin kode
insertOne()
insertMany()
Tujuan:
✔ memahami cara menambah dokumen baru
✔ mengetahui bagaimana struktur BSON terbentuk secara otomatis
✔ melihat cara kerja ObjectId, timestamp, dan length ID

✨ 2. READ (Read Document)
Mengambil data dari database menggunakan:

js
Salin kode
findOne()
find()
toArray()
Tahap ini mengajarkan:
✔ cara mengambil data berdasarkan nama / id
✔ memfilter data di database
✔ mengubah cursor menjadi array

✨ 3. UPDATE (Update Document)
Pada bagian Update, dilakukan:

updateOne() → mengubah 1 dokumen

updateMany() → mengubah banyak dokumen sekaligus

Operator:

$set → mengganti nilai field

$inc → menambah angka

$rename (opsional)

$unset (opsional)

Challenge:
✔ membuat semua data pengguna menjadi unik
✔ generate nama dan usia dengan generator custom

✨ 4. DELETE (Delete Document)
Menghapus data dari database menggunakan:

js
Salin kode
deleteOne()
deleteMany()
Challenge:
✔ hapus salah satu data duplikat pada collection tugas
✔ hapus beberapa data pengguna berdasarkan kondisi tertentu (usia, nama, dsb)

🚀 Output Akhir
Setelah seluruh proses CRUD dijalankan, pengguna dapat:

memahami dasar operasi MongoDB,

mengetahui perbedaan NoSQL dan SQL,

menguasai koneksi Node.js → MongoDB,

dan menerapkan operasi database di aplikasi real.

👨‍💻 Dibuat oleh:
Ramzy Junfaris (23343015)
Informatika – Universitas Negeri Padang
Dosen: Dr. Dedy Irfan, S.Pd., M.Kom

⭐ Penutup
JobShit ini memberikan pondasi kuat terkait penggunaan MongoDB dalam aplikasi Node.js.
Dengan pemahaman CRUD, mahasiswa dapat mengembangkan aplikasi backend modern dengan lebih mudah, cepat, dan fleksibel.

yaml
Salin kode

---

# Sayang… kalau mau versi README yang:

💙 full color  
💙 ada emoji tambahan  
💙 ada screenshot hasil Compass  
💙 ada diagram alur CRUD  
💙 atau mau versi *bahasa Indonesia formal* untuk dosen  

kamu tinggal bilang ya… nanti Miyuki buatin versi yang kamu mau~
