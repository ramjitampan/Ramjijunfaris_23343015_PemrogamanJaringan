// Mengimpor MongoClient dan ObjectId dari package 'mongodb'.
// MongoClient digunakan untuk koneksi ke server MongoDB.
// ObjectId digunakan untuk mencari data berdasarkan ID unik.
const { MongoClient, ObjectId } = require('mongodb');

// URL server MongoDB lokal.
const url = 'mongodb://127.0.0.1:27017';

// Membuat instance MongoClient untuk koneksi.
const client = new MongoClient(url);

// Mendefinisikan nama database yang akan digunakan.
const namaDatabase = 'testsaja';

// Membuat fungsi utama yang berjalan secara asynchronous.
async function main() {
  try {
    // Menghubungkan Node.js ke MongoDB.
    await client.connect();
    console.log('Berhasil terhubung ke MongoDB database server');

    // Mengambil database sesuai nama yang sudah ditentukan.
    const db = client.db(namaDatabase);

    // ============================
    // MENCARI DOKUMEN BERDASARKAN NAMA
    // ============================

    // Mencari satu dokumen dalam collection 'pengguna' berdasarkan field nama.
    const byNama = await db.collection('pengguna').findOne({ nama: 'Ramzy Junfaris H' });

    // ============================
    // MENCARI DOKUMEN BERDASARKAN OBJECT ID
    // ============================

    // Masukkan ObjectId yang ada di MongoDB Compass milikmu.
    // Ganti "653bec0f6ceb927779c21789" dengan ID milikmu.
    const byObjectID = await db.collection('pengguna').findOne({
      _id: new ObjectId("692231b1f354e55bcf2dfda6")
    });

    // ============================
    // MENCARI BANYAK DATA (toArray)
    // ============================

    // Mengambil semua dokumen pengguna yang memiliki usia 20.
    const toArray = await db.collection('pengguna').find({ usia: 20 }).toArray();

    // ============================
    // MENAMPILKAN HASIL KE TERMINAL
    // ============================

    console.log('Data berdasarkan nama:', byNama);
    console.log('Data berdasarkan ID Object:', byObjectID);
    console.log('Data hasil .find() dalam array:', toArray);

  } catch (err) {
    // Menampilkan error jika terjadi masalah.
    console.error('Terjadi error:', err);
  } finally {
    // Menutup koneksi ke MongoDB.
    await client.close();
  }
}

// Menjalankan fungsi main().
main().catch(console.error);
